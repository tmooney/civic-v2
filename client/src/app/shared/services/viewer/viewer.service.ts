import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { QueryRef } from 'apollo-angular';

import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, shareReplay, startWith } from 'rxjs/operators';

import { User, Organization, ViewerBaseGQL } from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

export interface Viewer extends User {
  mostRecentOrganization?: Organization;
  signedIn: boolean;
  signedOut: boolean;
  isAdmin: boolean;
  isEditor: boolean;
  canCurate: boolean;
  canModerate: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ViewerService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;

  data$!: Observable<any>;
  isLoading$!: Observable<boolean>;
  viewer$!: Observable<Viewer>;

  signedIn$!: Observable<boolean>;
  signedOut$!: Observable<boolean>;

  isCurator$!: Observable<boolean>;
  isAdmin$!: Observable<boolean>;
  isEditor$!: Observable<boolean>;

  canCurate$!: Observable<boolean>;
  canModerate$!: Observable<boolean>;

  constructor(
    private viewerBaseGQL: ViewerBaseGQL,
    private http: HttpClient,
    private logger: NGXLogger,
  ) {

  }

  watch(): Observable<any> {
    this.queryRef = this.viewerBaseGQL.watch();

    this.data$ = this.queryRef.valueChanges.pipe(
      shareReplay(1),
      map((r: any) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));

    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true));

    this.viewer$ = this.data$.pipe(
      pluck('data', 'viewer'),
      map((v: User): Viewer => {
        return <Viewer>{
          ...v,
          signedIn: v === null ? false : true,
          signedOut: v === null ? true : false,
          canCurate: canCurate(v),
          canModerate: canModerate(v),
          isAdmin: isAdmin(v),
          isEditor: isEditor(v),
          isCurator: isCurator(v)
        }
      }));

    this.signedIn$ = this.viewer$.pipe(
      map(v => v.signedIn));

    this.signedOut$ = this.viewer$.pipe(
      map(v => v.signedOut));

    this.isAdmin$ = this.viewer$.pipe(
      map(v => isAdmin(v)));

    this.isEditor$ = this.viewer$.pipe(
      map(v => isEditor(v)));

    this.isCurator$ = this.viewer$.pipe(
      map(v => isCurator(v)));

    this.canCurate$ = this.viewer$.pipe(
      map(v => canCurate(v)));

    this.canModerate$ = this.viewer$.pipe(
      map(v => canModerate(v)));

    function isAdmin(v: User): boolean {
      return (v && (v.role === 'admin')) ? true : false;
    }

    function isEditor(v: User): boolean {
      return (v && (v.role === 'editor')) ? true : false;
    }

    function isCurator(v: User): boolean {
      return (v && (v.role === 'curator')) ? true : false;
    }

    function canCurate(v: User): boolean {
      let canCurate = false;
      if (v && (v.role === 'curator' || v.role === 'editor' || v.role === 'admin')) {
        canCurate = true;
      }
      return canCurate;
    }

    function canModerate(v: User): boolean {
      let canModerate = false;
      if (v && (v.role === 'editor' || v.role === 'admin')) {
        canModerate = true;
      }
      return canModerate;
    }

    return this.data$;
  }

  // GET /sign_out with HttpClient, then refetch Viewer
  signOut(): void {
    this.http.get('/api/sign_out')
      .subscribe(d => {
        this.refetch();
      });
  }

  refetch(): void {
    this.queryRef.refetch();
  }

  ngOnDestroy(): void {
  }
  // getRole(): string | null {
  //   return this.role;
  // }

  // isEditor(): boolean {

  // }

  // isCurator(): boolean {

  // }

  // isAdmin(): boolean {

  // }

}

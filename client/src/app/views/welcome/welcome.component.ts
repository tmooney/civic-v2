import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { CivicStatsGQL, CivicStatsQuery } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  private statsRef!: QueryRef<CivicStatsQuery, {}>;
  stats$!: Observable<ApolloQueryResult<CivicStatsQuery>>;
  statsType: string;

  constructor(private statsGql: CivicStatsGQL) {
    const statsTypes = {
      Total: 'allTime',
      Yearly: 'newThisYear',
      Monthly: 'newThisMonth',
      Weekly: 'newThisWeek',
    }
    this.statsType = 'Total'; // set default filter value
  }


  ngOnInit() {
    this.statsRef = this.statsGql.watch({});
    this.stats$ = this.statsRef.valueChanges;
  }

}

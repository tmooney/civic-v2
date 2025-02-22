import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

export type SupportedPileupTags = 'drug' | 'disease' | 'organization'

export type TagInfo = {
  id: number
  name: string
  link: string
}

@Component({
  selector: 'cvc-tag-overflow',
  templateUrl: './tag-overflow.component.html',
  styleUrls: ['./tag-overflow.component.less']
})
export class CvcTagOverflowComponent implements OnInit {
  @Input() matchingText?: string
  @Input() tags: Maybe<TagInfo[]>
  @Input() tagType: Maybe<SupportedPileupTags>
  @Input() maxDisplayCount: number = 2

  displayedTags?: TagInfo[]
  hiddenTags?: TagInfo[]
  hiddenCount?: number
  matchedHiddenCount: number = 0

  ngOnInit() {
    this.calculateDisplayedTags()
  }

  calculateDisplayedTags() {
    this.displayedTags = this.tags?.slice(0, this.maxDisplayCount)
    this.hiddenTags = this.tags?.slice(this.maxDisplayCount)
    this.hiddenCount = this.hiddenTags?.length
    this.matchingText = this.matchingText?.toLowerCase()

    if (this.matchingText && this.hiddenTags) {
      let text = this.matchingText
      this.hiddenTags.forEach(t => {
        if (t.name.toLowerCase().includes(text)) {
          this.matchedHiddenCount += 1
        }
      });
    }
  }

  onOverflowClicked() { 
    this.maxDisplayCount = this.tags?.length || 0
    this.calculateDisplayedTags()
  }
}

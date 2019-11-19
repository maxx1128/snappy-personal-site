* Strip out unneeded markup and components
* Check against more accessible tab markup
* See if Ember Fiddle or something similar is still up and working?
* First a demo of making the component, then seeing if this can be made into a component? Pass in the needed info for the tabs and content, see if it'll render right?

```handlebars
<div role="tabs" class="tabs">
  <ul role="tablist" class="tabs__list">
    <li role="presentation">
      <button
        class="tabs__button {{if (eq commentStreamMode "all") 'tabs__button--active'}}"
        role="tab"
        id="tab-1"
        aria-controls="panel-1"
        tabindex={{if (eq commentStreamMode "all") "0" "-1"}}
        aria-selected={{eq commentStreamMode "all"}}
        onclick={{action "changeCommentStreamMode" "all"}}>
          Tab Item
      </button>
    </li>
  </ul>
</div>

<div class="tabPanel" role="tabpanel" aria-hidden="false" aria-labelledby="tab-1">
  <!-- Content here -->
</div>
```

```javascript
/**
 * @module Components
 */
import Component from '@ember/component';
import { bind } from '@ember/runloop';

export default Component.extend({
  tabFocus: 0,

  didInsertElement() {
    this.set('tablist', this.element.querySelector('[role="tablist"]'));
    this.set('tabs', this.element.querySelectorAll('[role="tab"]'));
    this.set('boundTabKeyboardNavigation', bind(this, this.tabKeyboardNavigation));
    this.tablist.addEventListener('keydown', this.boundTabKeyboardNavigation);
  },

  willDestroyElement() {
    this.tablist.removeEventListener('keydown', this.boundTabKeyboardNavigation);
  },

  tabKeyboardNavigation(e) {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      this.tabs[this.tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        this.tabFocus++;
        // If we're at the end, go to the start
        if (this.tabFocus >= this.tabs.length) {
          this.tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        this.tabFocus--;
        // If we're at the start, move to the end
        if (this.tabFocus < 0) {
          this.tabFocus = this.tabs.length - 1;
        }
      }

      this.tabs[this.tabFocus].setAttribute('tabindex', 0);
      this.tabs[this.tabFocus].focus();
    }
  },

  commentStreamMode: 'all',

  actions: {
    changeCommentStreamMode(mode, event) {
      event.preventDefault();
      this.commentStreamMode = mode;
    }
  }
});
```

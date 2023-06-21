import {entries} from '../../data/entries.js'
import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from 'react';

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => {
          const dontAddDivider = index === 0 
          return (
            <Fragment key={index}>
              {dontAddDivider? null: <Divider />}
             <Entry motto={entry.motto} date={entry.date} notes={entry.notes} /> 
            </Fragment>
          )
        })}
      </div>
    </section>
  );
}

/*
- Map over the `entries` array and render each entry in the `EntriesSection` component.
- Remember to use the `key` prop when mapping over the array.
- If you are using this template: How can you render a `<Divider />` component between each entry?
  - Don't break the flexbox layout (a `Fragment` might help)
  - Avoid having a divider below the last or above the first entry
*/
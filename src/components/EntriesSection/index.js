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
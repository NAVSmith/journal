import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";

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
        <Entry
          date="Feb 19, 1428"
          motto="Thats was it I guess"
          notes="you heard me ."
        />
        <Divider />
        <Entry
          date="Feb 6, 1776"
          motto="why do I live that long"
          notes="It wasn't it I guess."
        />
        <Divider />
        <Entry
          date="Feb 5, 1928"
          motto="using a journal for every 200 years is odd"
          notes="still i'm using it."
        />
        <Divider />
        <Entry
          date="Feb 23, 1999"
          motto="ho we are in the digital age"
          notes="how can an electronical journal worked 500 years a go."
        />
      </div>
    </section>
  );
}

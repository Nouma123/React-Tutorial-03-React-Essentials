import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              children="Components"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('jsx')}
              children="JSX"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('props')}
              children="Props"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('states')}
              children="States"
            ></TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </>
  );
}

export default App;
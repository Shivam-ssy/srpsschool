import ClassesCards from "../Component/ClassesCards"
import Header from "../Component/Header"
function Classes() {
  return (
    <main>
      <Header title="Classes" page="Classes"/>
      <div className="flex mt-10 md:mt-0 flex-wrap gap-5 justify-center">
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
        <ClassesCards mainImg="/p1.jpg" title="SportClasses" details="lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit." subimage="/p2.jpg" price="190$" name="Alexa Honix" />
      </div>
    </main>
  )
}

export default Classes

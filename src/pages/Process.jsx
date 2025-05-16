import hero from "../assets/oilbottle.jpg"
import "../App.css"

const Process = () => (
  <section className="max-w-6xl mx-auto p-6 space-y-6 raleway">
    <h2 className="text-3xl text-olive ">Our Cold-Pressing Process</h2>
    <p>We use wooden churners and traditional techniques to extract oils without heat or chemicals.</p>
    <img src={hero} alt="Cold Pressing" className="rounded-2xl shadow" />
  </section>
)
export default Process

import Header from "./components/Header"
import editorDesktopImage from './assets/images/illustration-editor-desktop.svg'
import editorMobileImage from './assets/images/illustration-editor-mobile.svg'
import laptopImage from './assets/images/illustration-laptop-desktop.svg'
import laptopMobileImage from './assets/images/illustration-laptop-mobile.svg'
import phonesImage from './assets/images/illustration-phones.svg'
import circlesPattern from './assets/images/bg-pattern-circles.svg'
import Footer from "./components/Footer"

function App() {

  return (
    <div className="">
      <Header />

      <section className="p-20 mt-20 text-body bg-contain bg-no-repeat md:h-screen bg-[51rem_center] max-md:flex max-md:flex-col max-md:items-center" style={{ backgroundImage: `url(${editorDesktopImage})`, }}>
        <h1 className="text-center text-3xl font-bold my-10 text-headings">Designed for the future</h1>
        <img src={editorMobileImage} alt={'editor-image'} className="md:hidden" />
        <div className="blue-dark-text w-full md:w-2/4 max-md:text-center">
          <div className="mb-10">
            <h4 className="font-bold text-2xl text-headings mb-3">introduction an extensible editor</h4>
            <p className="leading-7 text-gray-500">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat, Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          </div>
          <div>
            <h4 className="font-bold text-2xl text-headings mb-3">Robust content management</h4>
            <p className="leading-7 text-gray-500">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat, Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          </div>
        </div>

      </section>

      <section className="p-10 mt-20 blue-bg md:h-[65vh] rounded-[0_100px_0_100px] relative text-white flex flex-col md:flex-row bg-auto bg-no-repeat bg-[-295px_-33rem]" style={{ backgroundImage: `url(${circlesPattern})`, }}>
        <div className="md:w-1/2">
          <img src={phonesImage} alt="alt" className="absolute md:top-[-4rem] top-[-10rem] left-0" />
        </div>
        <div className="text-right w-full md:w-1/2 flex flex-col justify-center items-start max-md:mt-[350px] ">
          <h1 className="text-4xl mb-5 max-md:text-center">State of the Art Infrastructure</h1>
          <p className="leading-8 text-start text-slate-200 max-md:text-center">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
          </p>
        </div>
      </section>


      <section className="p-20 md:mt-20 max-md:mb-[350px] text-body bg-contain bg-no-repeat h-screen md:bg-[-14rem_center] bg-[-30rem_center]" style={{ backgroundImage: `url(${laptopImage})`, }}>
        <img src={laptopMobileImage} alt="laptop-image" className="md:hidden" />
        <div className="blue-dark-text md:w-2/4 md:float-right max-md:text-center">
          <div className="mb-10">
            <h4 className="text-3xl text-headings mb-3">Free, Open ,Simple</h4>
            <p className="leading-77 text-gray-500">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
              labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
              animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
              aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
              pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            </p>
          </div>
          <div>
            <h4 className="text-3xl text-headings mb-3">Powerful tooling</h4>
            <p className="leading-7 text-gray-500">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
              labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
              animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            </p>
          </div>
        </div>

      </section>

      <Footer />

    </div >
  )
}

export default App

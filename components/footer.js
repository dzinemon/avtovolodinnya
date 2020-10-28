import FeedbackForm from '../components/model/feedbackform'

function Footer() {
  return (
    <>
    <footer className="pt-10">
      <div className="bg-gray-100">
        <div className="xl:container mx-auto">
          <section className="p-4">
            <p className="text-sm">
              Виникли питання чи пропозиції? <br/>
              Напишіть нам <span  >avtovolodinnya@gmail.com</span>
            </p>
            <hr className="my-4 border-gray-200"/>
            <p>
              <span>Вартість володіння авто на сайті avtovolodinnya.com</span>
            </p>
          </section>
        </div>
      </div>
    </footer>
    <FeedbackForm />
    </>
  )
}

export default Footer
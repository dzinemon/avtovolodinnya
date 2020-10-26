import React, { useState } from 'react';

function FeedbackForm() {

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [message, setMessage ] = useState('');

  const [isActive, setActive] = useState(false);
  const [isInfo, setInfo] = useState(false);

  const [ isSubmitted, setSubmitted ] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const toggleForm = (e) => {
    setActive(!isActive);
    setInfo(false)
  }

  const handleMouseOver = e => {
    setInfo(true);
  }

  const handleMouseLeave = e => {
    setInfo(false);
  }
  

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", 
        name,
        email,
        message
      })
    })
      .then(() => {
        console.log('form sent')
        setSubmitted(true);
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  } 


  return (
    <div className="position fixed right-0 bottom-0 sm:left-auto left-0">
      <div
        // style={{
        //   transitionProperty: 'width',
        //   transitionDuration: '500ms',
        //   transitionTimingFunction: "linear"
        // }}
        className={`
          transtion-all
          overflow-hidden m-4 
          
          ${ isActive ? 'rounded-lg p-4 border-blue-500 border w-auto bg-white shadow-lg' : `rounded-full`}
          ${ isInfo ? ' ' : ``}
          `
        }
      >
        { isActive && (<button type="submit"
          className="position absolute right-0 top-0 text-lg text-red-600 h-10 w-10 sm:h-8 sm:w-8 leading-none rounded-full border-red-600 border bg-white hover:bg-red-600 hover:text-white"
          onClick={toggleForm}
          >&times;
        </button>)}
        
        { isActive && (
          <form 
            name="contact" netlify="true"
            onSubmit={handleSubmit}
            className={ `${isSubmitted ? `hidden` : ''}`}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="mb-2">
              <label htmlFor="name" className="text-gray-700 text-sm font-semibold">
                Твоє ім'я: 
              </label>
              <input className="w-full bg-gray-200 rounded focus:bg-gray-100 py-1 px-2" type="text" id="name" name="name" value={name} onChange={handleChange} />
            </p>
            <p className="mb-2">
              <label htmlFor="email" className="text-gray-700 text-sm font-semibold">
                Твій Email: 
              </label>
              <input className="w-full bg-gray-200 rounded focus:bg-gray-100 py-1 px-2" id="email" type="email" name="email" value={email} onChange={handleChange} />
            </p>
            <p className="mb-2">
              <label htmlFor="message" className="text-gray-700 text-sm font-semibold">
                Твій відгук: 
              </label>
              <textarea 
                className="w-full bg-gray-200 rounded focus:bg-gray-100 py-1 px-2 h-32" 
                id="message" 
                name="message" 
                placeholder="Що подобається? Що покращити? Що змінити?"
                value={message} 
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <button type="submit"
                className="w-1/2 flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-2 md:text-lg md:px-4"
              >Відправити</button>
            </p>
          </form>
        )}

        {isSubmitted && isActive && (
          <div>
            <p className="text-gray-700 font-bold text-center text-lg">Дякуємо за відгук</p>
            <p className="text-center">
              <button 
                className="text-blue-500 hover:underline hover:text-blue-700 text-sm"
                onClick={() => {
                  setInfo(false);
                  setSubmitted(false);
                }}
              >написати ще один</button>
            </p>
          </div>
        )}

        { !isActive && (<div className="flex flex-row justify-end items-center">
          { isInfo &&
            <div className="leading rounded-full bg-white h-8 py-1 text-blue-500 text-sm border border-blue-600 font-light px-3 transform duration-1000">
              Будемо вдячні за твій відгук
            </div>
          }
            <div>
              <button type="submit"
                className="text-lg text-white h-12 w-12 p-2 leading-none rounded-full border-blue-600 border bg-blue-600 hover:bg-white hover:text-blue-600"
                aria-label="Відправити відгук"
                onClick={toggleForm}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  className="transform rotate-45"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default FeedbackForm;
//*** function for masking date (UTC) to DD-MM-YYYY ***//
export const transformDate = (date) => {
  let result = 'DD-MM-YYYY';

  if(date) {
    result = new Date(date).toLocaleDateString( 'en-gb',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZone: 'utc'
      }
    ).replace(/\//g, "-");
  }
  
  return result;
}

//*** function debounce / delay for input ***//
export const debounce = (func, wait, immediate) => {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
}
export const get = url => {
    return new Promise(
      (resolve, reject) => {
        fetch(url)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(json => resolve(json));
          } else {
            reject(response);
          }
        })
      } 
    ).catch(err => {
      console.log(`There has been a problem with your fetch operation: ${err}`);
    });
  }
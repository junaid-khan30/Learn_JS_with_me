function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data from an API
        setTimeout(() => {
            const data = { message: 'Data fetched successfully' };
            resolve(data);
        }, 2000);
    });
  }
  
  // Using the promise
  fetchData()
    .then(data => {
      console.log(data);
    })
     
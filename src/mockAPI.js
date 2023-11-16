const availableTimesByDate = {
  "2023-11-01": ['10:00', '11:00', '12:00'],
  "2023-11-02": ['10:00', '11:00', '12:00'],
  "2023-11-03": ['14:00', '15:00', '16:00'],
  "2023-11-04": ['10:00', '11:00', '12:00'],
  "2023-11-05": ['14:00', '15:00', '16:00'],
  "2023-11-06": ['10:00', '11:00', '12:00'],
  "2023-11-07": ['14:00', '15:00', '16:00'],
  "2023-11-08": ['10:00', '11:00', '12:00'],
  "2023-11-09": ['10:00', '11:00', '12:00'],
  "2023-11-10": ['14:00', '15:00', '16:00'],
  "2023-11-11": ['10:00', '11:00', '12:00'],
  "2023-11-12": ['14:00', '15:00', '16:00'],
  "2023-11-13": ['10:00', '11:00', '12:00'],
  "2023-11-14": ['14:00', '15:00', '16:00'],
  "2023-11-15": ['10:00', '11:00', '12:00'],
  "2023-11-16": ['10:00', '11:00', '12:00'],
  "2023-11-17": ['14:00', '15:00', '16:00'],
  "2023-11-18": ['10:00', '11:00', '12:00'],
  "2023-11-19": ['14:00', '15:00', '16:00'],
  "2023-11-20": ['10:00', '11:00', '12:00'],
  "2023-11-21": ['14:00', '15:00', '16:00'],
  "2023-11-22": ['10:00', '11:00', '12:00'],
  "2023-11-23": ['10:00', '11:00', '12:00'],
  "2023-11-24": ['14:00', '15:00', '16:00'],
  "2023-11-25": ['10:00', '11:00', '12:00'],
  "2023-11-26": ['14:00', '15:00', '16:00'],
  "2023-11-27": ['10:00', '11:00', '12:00'],
  "2023-11-28": ['14:00', '15:00', '16:00'],
  "2023-11-29": ['14:00', '15:00', '16:00'],
  "2023-11-30": ['14:00', '15:00', '16:00'],
  "2023-11-31": ['14:00', '15:00', '16:00'],

};


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(availableTimesByDate[date]){
              resolve(availableTimesByDate[date])
          }
          else{
              reject(new Error('No available times for the selected date.'));
          }
      } , 1000)
  })
}

const submitAPI = (formDate, formTime) => {
  
  availableTimesByDate[formDate.value] = availableTimesByDate[formDate.value].filter(time => time !== formTime.value);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formDate.value && formTime.value) {
        resolve(true); // Simulate successful submission
      } else {
        reject(console.log(formDate.value, formTime.value));
      }
    }, 1000); // Simulate API delay
  });
};

export{fetchAPI,submitAPI}
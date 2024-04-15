export function isLeapYear() {
    const currentYear = new Date().getFullYear();
    return (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
  }

  export const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];


 
 export function generateNumbersUpTo(number:number) {
    

    return Array.from({ length: number }, (_, index) => index + 1);
  }


  

  
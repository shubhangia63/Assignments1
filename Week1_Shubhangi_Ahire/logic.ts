export function splitString(str: string): string {
    return str.split('_').join(' ');
  }
  
  export function concatenateStrings(str1: string, str2: string): string {
    return str1 + str2;
  }
  
  export function LeapYear(year: number): boolean{
   let ly = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   return ly;
  }

  export function secretHandshake(number: number): string[] {
    let binary = number.toString(2).padStart(5, '0');
    let actions: string[] = [];

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            switch (i) {
                case 4:
                    actions.push("wink");
                    break;
                case 3:
                    actions.push("double blink");
                    break;
                case 2:
                    actions.push("close your eyes");
                    break;
                case 1:
                    actions.push("jump");
                    break;
                case 0:
                    actions.reverse();
                    break;
            }
        }
    }

    return actions;
}

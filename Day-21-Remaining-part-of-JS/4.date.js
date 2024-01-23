function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  // getDate() : Gets(number) the day-of-the-month, using local time.
  console.log("Date:", currentDate.getDate());

  // getMonth(): Gets the month(in number), using local time
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1

  // getFullYear(): Gets the year, using local time.
  console.log("Year:", currentDate.getFullYear());

  // getHours(): Gets the hours in a date, using local time.
  console.log("Hours:", currentDate.getHours());

  // getMinutes(): Gets the minutes of a Date object, using local time.
  console.log("Minutes:", currentDate.getMinutes());

  // getSeconds(): Gets the seconds of a Date object, using local time.
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  /**
   * setFullYear(year,month,date) : return number
   *                 Sets the year of the Date object using local time.

parameters: year — A numeric value for the year.
            month — A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.(optional)
            date — A numeric value equal for the day of the month.(optional)
   */
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  /**setMonth(month,date): return number
             Sets the month value in the Date object using local time.

    Parameters:
            month — A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.

            date — A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
 */
  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  //getTime(): Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  /**
   * var Date: DateConstructor
new (year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined) => Date (+4 overloads)

Creates a new Date.

@param year — The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.

@param monthIndex — The month as a number between 0 and 11 (January to December).

@param date — The date as a number between 1 and 31.

@param hours — Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.

@param minutes — Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.

@param seconds — Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.

@param ms — A number from 0 to 999 that specifies the milliseconds.
   */
  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

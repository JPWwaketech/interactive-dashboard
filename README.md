 # Interactive Productivity Dashboard
 This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
 ## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator
## Weekly Task Goals
The Weekly Task Goal feature allows users to calculate how many tasks they should aim to complete each week based on their daily productivity goals and any additional bonus tasks they want to include. After entering their name, daily task target, and weekly bonus tasks, the dashboard displays a personalized weekly total. 
## Metric Converter 
This tool converts between common Imperial and Metric units, including inches, feet, yards, miles, centimeters, meters, and kilometers. Users can enter a numeric value, choose a conversion type, and receive the converted result instantly.
### Logic and Pseudocode
BEGIN

    DISPLAY "Enter a numeric value to convert:"
    INPUT value

    DISPLAY "Select a conversion type:"
    DISPLAY "1 = inch to centimeter"
    DISPLAY "2 = foot to centimeter"
    DISPLAY "3 = yard to meter"
    DISPLAY "4 = mile to kilometer"
    DISPLAY "5 = centimeter to inch"
    DISPLAY "6 = centimeter to foot"
    DISPLAY "7 = meter to yard"
    DISPLAY "8 = kilometer to mile"
    INPUT choice

    IF choice = 1 THEN
        SET result = value * 2.54
        DISPLAY "Result in centimeters: ", result

    ELSE IF choice = 2 THEN
        SET result = value * 30.48
        DISPLAY "Result in centimeters: ", result

    ELSE IF choice = 3 THEN
        SET result = value * 0.91
        DISPLAY "Result in meters: ", result

    ELSE IF choice = 4 THEN
        SET result = value * 1.61
        DISPLAY "Result in kilometers: ", result

    ELSE IF choice = 5 THEN
        SET result = value * 0.39
        DISPLAY "Result in inches: ", result

    ELSE IF choice = 6 THEN
        SET result = value * 0.0328
        DISPLAY "Result in feet: ", result

    ELSE IF choice = 7 THEN
        SET result = value * 1.09
        DISPLAY "Result in yards: ", result

    ELSE IF choice = 8 THEN
        SET result = value * 0.62
        DISPLAY "Result in miles: ", result

    ELSE
        DISPLAY "Invalid selection. Please try again."

    END IF

END

const { google } = require("googleapis");
const path = require("path");

async function getBusyIntervals(calendarId, timeMin, timeMax) {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "ls_rest_task.json"),
        scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    try {
        const serviceAccountEmail = (await auth.getClient()).email;
        console.log("Service Account Email:", serviceAccountEmail);

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: timeMin,
                timeMax: timeMax,
                items: [{ id: calendarId }],
            },
        });

        console.log("Full Response:", JSON.stringify(response.data, null, 2));
        return response.data.calendars[calendarId].busy;

    } catch (error) {
        console.error("Error fetching busy intervals:", error.message);
        throw error;
    }
}

(async () => {
    const calendarId = "ls-task@smart-tractor-421519.iam.gserviceaccount.com";
    const timeMin = "2024-12-10T00:00:00Z";
    const timeMax = "2024-12-15T00:00:00Z";

    try {
        const busyIntervals = await getBusyIntervals(calendarId, timeMin, timeMax);
        console.log("Busy Intervals:", busyIntervals);
    } catch (err) {
        console.error("Error:", err.message);
    }
})();

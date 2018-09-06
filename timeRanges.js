let times =
    [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 5 },
        { startTime: 4, endTime: 8 },
        { startTime: 3, endTime: 9 },
        { startTime: 10, endTime: 12 },
        { startTime: 9, endTime: 10 }
    ];

//sorted
// { startTime: 0, endTime: 1 },
// { startTime: 3, endTime: 5 },
// { startTime: 4, endTime: 8 },
// { startTime: 9, endTime: 10 },
// { startTime: 10, endTime: 12 },


function mergeRanges(ranges) {

    let sortedRanges = ranges.sort(function (a, b) {
        return a.startTime - b.startTime;
    });

    let condensedRanges = [sortedRanges[0]];

    for (let i = 0; i < sortedRanges.length; i++) {
        for (let j = i + 1; j < sortedRanges.length; j++) {
            if (sortedRanges[i].endTime >= sortedRanges[j].startTime) {
                condensedRanges.push(
                    { startTime: sortedRanges[i].startTime, endTime: sortedRanges[j].endTime });
            }
        }
    }
    return condensedRanges;
}

console.log(mergeRanges(times));
console.log('==============================');

function mergeRanges2(arr) {
    let newStart = 0;
    let newEnd = 0;
    let newMeetings = [];

    let sortedMeetings = arr.sort(function (a, b) {
        return a.startTime - b.startTime;
    });

    for (let j = 0; j < sortedMeetings.length; j++) {
        if (newMeetings.length != 0) {
            if (sortedMeetings[j].startTime > newMeetings[newMeetings.length - 1].endTime) {
                newStart = sortedMeetings[j].startTime;
                newEnd = sortedMeetings[j].endTime;
                newMeetings.push({ 'startTime': newStart, 'endTime': newEnd });

            } else if (newMeetings[newMeetings.length - 1].endTime < sortedMeetings[j].endTime) {
                // Calculating new end time.
                newMeetings[newMeetings.length - 1].endTime = sortedMeetings[j].endTime
            }


        } else {
            // Initial push
            newStart = sortedMeetings[j].startTime;
            newEnd = sortedMeetings[j].endTime;
            newMeetings.push({ 'startTime': newStart, 'endTime': newEnd });
        }
    }
    return newMeetings
}

console.log(mergeRanges2(times));
console.log('==============================');

function mergeRanges3(meetings) {

    // sort by start times
    var sortedMeetings = meetings.slice().sort(function (a, b) {
        return a.startTime > b.startTime ? 1 : -1;
    });

    // initialize mergedMeetings with the earliest meeting
    var mergedMeetings = [sortedMeetings[0]];

    for (var i = 1; i < sortedMeetings.length; i++) {

        var currentMeeting = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // if the current and last meetings overlap, use the latest end time
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

            // add the current meeting since it doesn't overlap
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
}

console.log(mergeRanges3(times));
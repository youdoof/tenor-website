// Used in creating the full scale of notes, this is the note names
let noteArray = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];

// Used in creating the full scale of notes, these are the octave numbers
let octaveArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// generateOctaves goes through each note name and adds an octave number to the
// end of it, returning the entire scale of notes from 0 to 8
function generateOctaves() {
    var i;
    var j;
    var scaleArray = [];
    for (i = 0; i < octaveArray.length; i++) {
        for (j = 0; j < noteArray.length; j++) {
            scaleArray.push(noteArray[j] + octaveArray[i]);
        }
    }
    return scaleArray;
}

let notes = generateOctaves();

// Takes a starting note and array of notes, then returns a string of notes
// representing a minor seventh scale built upon the starting note.
function minorSeventh(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 3] + ", " +
    notes[startIndex + 7] + ", " +
    notes[startIndex + 10];
}

function majorSeventh(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 4] + ", " +
    notes[startIndex + 7] + ", " +
    notes[startIndex + 11];
}

function minorMajorSeventh(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 3] + ", " +
    notes[startIndex + 7] + ", " +
    notes[startIndex + 11];
}

function diminishedSeventh(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 3] + ", " +
    notes[startIndex + 6] + ", " +
    notes[startIndex + 9];
}

function evansTuning(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 4] + ", " +
    notes[startIndex + 8] + ", " +
    notes[startIndex + 11] + ", " +
    notes[startIndex + 15] + ", " +
    notes[startIndex + 20];
}

function brianGraham(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 3] + ", " +
    notes[startIndex + 6] + ", " +
    notes[startIndex + 9] + ", " +
    notes[startIndex + 12];
}

function billBachmann(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 6] + ", " +
    notes[startIndex + 9] + ", " +
    notes[startIndex + 12] + ", " +
    notes[startIndex + 16];
}

function scvOhFour(rootNote) {
    var startIndex = notes.indexOf(rootNote);
    return notes[startIndex] + ", " +
    notes[startIndex + 4] + ", " +
    notes[startIndex + 7] + ", " +
    notes[startIndex + 10] + ", " +
    notes[startIndex + 13];
}

function callEmPlease(rootNote) {
    var minorSev = "Minor Seventh: " + minorSeventh(rootNote);
    var majorSev = "Major Seventh: " + majorSeventh(rootNote);
    var mMSev = "Minor Major Seventh: " + minorMajorSeventh(rootNote);
    var dimiSev = "Diminished Seventh: " + diminishedSeventh(rootNote);
    var evans = "Evans Example: " + evansTuning(rootNote);
    var brian = "Brian Example: " + brianGraham(rootNote);
    var bill = "Bill Bachmann: " + billBachmann(rootNote);
    var scv = "SCV 2004: " + scvOhFour(rootNote);

    return minorSev + "\n" +
    majorSev + "\n" +
    mMSev + "\n" +
    dimiSev + "\n" +
    evans + "\n" +
    brian + "\n" +
    bill + "\n" +
    scv;
}

var quads = {
    root: "B3",
    drums: 4,
    tuning: [0,3,6,9],
    methodName: function() {
        return this.root;
    },
    tune: function() {
        return billBachmann(this.root);
    }
};

var quints = {
    root: "A#/Bb3",
    drums: 5,
    tune: function() {
        return brianGraham(this.root);
    }
}

var sextets = {
    root: "B3",
    drums: 6,
    tuning: "Diminished",
    tune: function() {
        return evansTuning(this.root);
    }
}

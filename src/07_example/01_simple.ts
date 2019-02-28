import {forkJoin, of} from "rxjs";
import {delay, map, mergeMap} from "rxjs/operators";

const getTracks = () => {
    console.log('Getting tracks');
    return of({
        track1: {
            name: 'First Track'
        },
        track2: {
            name: 'Second Track'
        }
    }).pipe(delay(500));
};

const getAudio = (tracks) => {
    console.log('Getting audio for tracks ');
    tracks.track1.audio = 'track1.mp3';
    tracks.track2.audio = 'track2.mp3';
    return of(tracks).pipe(delay(1000));
};

const getImage = (tracks) => {
    console.log('Getting image for tracks ');
    tracks.track1.image = 'track1.png';
    tracks.track2.image = 'track2.png';
    return of(tracks).pipe(delay(1000));
};

getTracks()
    .pipe(
        mergeMap((tracks) => forkJoin(getImage(tracks), getAudio(tracks))),
        map(tracks => tracks[0])
    )
    .subscribe((tracks) => {
        console.log('------------------------');
        console.log('All completed', tracks)
    });
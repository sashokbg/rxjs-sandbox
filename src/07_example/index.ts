import {concat, forkJoin, from, Observable, of} from "rxjs";
import {concatMap, delay, distinctUntilChanged, map, mergeMap, take, tap} from "rxjs/operators";

const getTracks = () => {
    console.log('Getting tracks');
    return of({
        tracks: [
            {
                name: 'First Track',
                number: 1
            },
            {
                name: 'Second Track',
                number: 2
            }
        ]

    }).pipe(delay(1000));
};

const getAudio = (trackNumber) => {
    console.log('Getting audio for tracks ');
    return of(`track${trackNumber}.mp3`).pipe(delay(1000));
};

const getImage = (trackNumber) => {
    console.log('Getting image for tracks ');
    return of(`track${trackNumber}.png`).pipe(delay(1000));
};

getTracks()
    .pipe(
        mergeMap(tracks => from(tracks.tracks)),
        tap(track => console.log('Tap', track)),
        mergeMap((track: any) => forkJoin(getAudio(track.number), getImage(track.number)).pipe(
            map(audioImage => {
                track.audio = audioImage[0];
                track.image = audioImage[1];
                return track;
            }))
        ),
    )
    .subscribe(
        (result) => {console.log('--- Final result ---', result)}
    );



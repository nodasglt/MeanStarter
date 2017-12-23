import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BannerService {
    private subject = new Subject<string>();

    setText(text: string) {
        this.subject.next(text);
    }

    getText(): Observable<string> {
        return this.subject.asObservable();
    }
}

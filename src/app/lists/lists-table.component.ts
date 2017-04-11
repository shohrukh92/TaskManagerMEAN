import { Component, Input } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    @Input() lists: List[];
    rowHighlightColor: string = '#d2f3c7';

    constructor(private _listsApi: ListsApi) {
        this.lists = [];
    }

    deleteList(list: List) {
        this._listsApi.deleteList(list._id).subscribe();
    }
}
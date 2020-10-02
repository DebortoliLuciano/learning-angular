import {Content} from './content-interface';


export class ContentList {
  private _items: Content[];
  constructor() {
    this._items = [];
  }
  get items(): Content[]{
    return this._items;
  }
  addContent(item: Content): void{
    this._items.push(item);
    return;
  }
  arraySize(): number{
    return this._items.length;
  }
  selectContent(index: number): string{
    return `<strong>${this._items[index].id}</strong></br><strong>${this._items[index].author}</strong></br><strong>${this._items[index].title}</strong></br><strong>${this._items[index].body}</strong></br>`;
  }


}

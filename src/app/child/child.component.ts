import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Params, Route } from '@angular/router';
import {selectTitle, selectCurrentRoute, selectUrl, selectFragment, selectQueryParams, selectRouteParams} from "../store/router.selectors";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title?: string;
  currentRoute?: Route;
  url?: string;
  fragment?: string;
  queryParams?: Params;
  routeParams?: Params;
  constructor(private store: Store) { }

  ngOnInit(): void {
  	this.store.select(selectTitle).subscribe(title => this.title = title);
  	this.store.select(selectCurrentRoute).subscribe(currentRoute => this.currentRoute = currentRoute);
  	this.store.select(selectUrl).subscribe(url => this.url = url);
  	this.store.select(selectFragment).subscribe(fragment => this.fragment = fragment);
  	this.store.select(selectQueryParams).subscribe(queryParams => this.queryParams = queryParams);
  	this.store.select(selectRouteParams).subscribe(routeParams => this.routeParams = routeParams);
  }

}

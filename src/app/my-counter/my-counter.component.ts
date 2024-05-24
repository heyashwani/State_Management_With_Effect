import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset,saveData } from '../counter.actions';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { selectCounter, selectUser } from '../counter.selector';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent implements OnInit {
  count$: Observable<any>;
  user$: Observable<any>;
  userData:any = [];

  constructor(private store: Store<{ count: number,user:any }>,
    private movieService: MoviesService,
    private router:Router) {
      // this.count$ = store.select('count');
      // this.count$ = store.pipe(select(selectCounter))
      
      // this.user$ = store.select('user');
      this.user$ = store.pipe(select(selectUser))
      
    }

  ngOnInit(): void {

    this.user$.subscribe((res:any)=>{
      if(!(res.length>0)){
        setTimeout(() => {
          // this.getDataFromServer()
          this.store.dispatch({ type: '[Movies Page] Load Movies' })
        }, 4000);
      }else{
        this.userData = res
      }
    })

    
    
  }

  increment() {
    // this.store.dispatch(increment());
  }

  decrement() {
    // this.store.dispatch(decrement());
  }

  reset() {
    // this.store.dispatch(reset());
  }

  

  pageRedirect(path:string){
    this.router.navigate([path])
  }

  refresh(){
    this.store.dispatch({ type: '[Movies Page] Load Movies' })
  }
}

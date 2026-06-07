import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CourseActions} from "./action-types";
import {CoursesHttpService} from "./services/courses-http.service";
import {concatMap, map} from "rxjs/operators";
import {allCoursesLoaded} from "./course.actions";

@Injectable()
export class CoursesEffects {

  loadCoures$ = createEffect(
    () => this.action$
      .pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap(action => this.coursesHttpService.findAllCourses()),
        map(courses => allCoursesLoaded({courses}))
      )
  )

  constructor(private action$: Actions, private coursesHttpService: CoursesHttpService) {
  }

}

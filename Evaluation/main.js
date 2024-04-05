// main.js

const Api = (() => {
    const url = "http://localhost:4232/courseList";
    const getData = fetch(url).then((res) => res.json());
    return {
        getData,
    };
})();

const View = (() => {
    // dom elements
    const domStr = {
        availableCourses: ".course-container",
    };

    // view of available courses
    const createAvailableCourses = (courses) => {
        return courses.map((course, index) => {
        return `<div class="course-unit ${index % 2 === 0 ? 'even' : ''}">
                    <p>${course.courseName}<p>
                    <p>Course Type : ${course.required}</p>
                    <p>Course Credit : ${course.credit}</p>
                </div>`;
        }).join('');
    }

    // render the view
    const render = (element,tmp) => {
        element.innerHTML = tmp;
    };

    return {
        domStr,
        createAvailableCourses,
        render,
    };
})();

const Model = ((view, api) => {
    const { getData } = api;
    const { domStr,createAvailableCourses,render } = view;

    // state of available courses
    class availableCoursesState {
        constructor() {
            this._availableCourses = [];
        }
        get getAvailableCourses() {
            return this._availableCourses;
        }
        set setAvailableCourses(courses) {
            this._availableCourses = courses;
            const availableCoursesList = document.querySelector(view.domStr.availableCourses);
            const tmp = view.createAvailableCourses(this._availableCourses);
            view.render(availableCoursesList, tmp);
        }
    }

    // state of selected courses
    class selectedCoursesState {
        constructor() {
            this._selectedCourses = [];
        }
        get getSelectedCourses() {
            return this._selectedCourses;
        }
        set setSelectedCourses(courses) {
            this._selectedCourses = courses;
            const selectedCoursesList = document.querySelector(view.domStr.selectedCourses);
            const tmp = view.createSelectedCourses(this._selectedCourses);
            console.log(tmp);
            view.render(selectedCoursesList, tmp);
        }
    }

    return {
        availableCoursesState,
        selectedCoursesState,
        getData
    };
})(View, Api);

const Controller = ((view, model) => {
    const { getData,availableCoursesState,selectedCoursesState} = model;
    const state = new availableCoursesState();

    // initialize the page
    const init = () =>{
        getData.then((data) => {
            // console.log(data);
            state.setAvailableCourses = data;
        });
    }

    const bootstrap = () => {
        init();
    };

    return {
        bootstrap,
    };
})(View, Model);

Controller.bootstrap();

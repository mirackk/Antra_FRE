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
        selectedCourses: ".selected-courses .course-container",
    };

    const createCourseUnit = (course, index) => {
        return `<div class="course-unit ${index % 2 === 0 ? 'even' : ''}" data-credit="${course.credit}">
                    <p>${course.courseName}</p>
                    <p>Course Type: ${course.required}</p>
                    <p>Course Credit: ${course.credit}</p>
                </div>`;
    };

    const createAvailableCourses = (courses) => {
        return courses.map((course, index) => createCourseUnit(course, index)).join('');
    };

    const createSelectedCourses = (courses) => {
        return courses.map((course, index) => createCourseUnit(course, index)).join('');
    };

    // render the view
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    };

    return {
        domStr,
        createAvailableCourses,
        createSelectedCourses,
        render,
    };
})();

const Model = ((view, api) => {
    const { getData } = api;
    const { domStr, createAvailableCourses,createSelectedCourses, render } = view;

    // state of available courses
    class AvailableCoursesState {
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
    class SelectedCoursesState {
        constructor() {
            this._selectedCourses = [];
            this.totalCredit = 0;
        }
        get getSelectedCourses() {
            return this._selectedCourses;
        }
        set setSelectedCourses(courses) {
            this._selectedCourses = courses;
            this.totalCredit = this._selectedCourses.reduce((acc, course) => acc + course.credit, 0);
            // const selectedCoursesList = document.querySelector(domStr.selectedCourses);
            // const tmp = createSelectedCourses(this._selectedCourses);
            // render(selectedCoursesList, tmp);
            this.updateTotalCredit();
        }
        renderSelectedCoursesResult() {
            const selectedCoursesList = document.querySelector(domStr.selectedCourses);
            const tmp = createSelectedCourses(this._selectedCourses);
            render(selectedCoursesList, tmp);
        }

        updateTotalCredit() {
            const totalCreditDisplay = document.getElementById("total-credit");
            totalCreditDisplay.textContent = this.totalCredit;
        }
        addCourse(course) {
            this._selectedCourses.push(course);
            this.setSelectedCourses = this._selectedCourses;
        }
        removeCourse(courseName) {
            this._selectedCourses = this._selectedCourses.filter((course) => course.courseName !== courseName);
            this.setSelectedCourses = this._selectedCourses;
        }

    }

    return {
        AvailableCoursesState,
        SelectedCoursesState,
        getData
    };
})(View, Api);

const Controller = ((view, model) => {
    const { domStr } = view;
    const { getData, AvailableCoursesState, SelectedCoursesState } = model;
    const availableState = new AvailableCoursesState();
    const selectedState = new SelectedCoursesState();
    let isSelectButtonClicked = false;

    // initialize the page
    const init = () => {
        getData.then((data) => {
            // console.log(data);
            availableState.setAvailableCourses = data;
        });
    }

    // handle course click event
    const handleCourseClick = (e) => {
        const courseUnit = e.target.closest(".course-unit");
        if (courseUnit && !isSelectButtonClicked) {
            courseUnit.classList.toggle("selected");
            const courseData = {
                courseName: courseUnit.querySelector("p:first-child").textContent,
                required: courseUnit.querySelector("p:nth-child(2)").textContent.split(": ")[1],
                credit: parseInt(courseUnit.dataset.credit),
            };

            if (courseUnit.classList.contains("selected")) {
                selectedState.addCourse(courseData);
            } else {
                selectedState.removeCourse(courseData.courseName);
            }
        }
    }

    // handle select button click event
    const handleSelectClick = () => {
        isSelectButtonClicked = true;
        const availableCoursesList = document.querySelector(view.domStr.availableCourses);
        const selectedCourses = selectedState.getSelectedCourses;
        // clear the selected courses from the available courses
        const availableCourses = availableState.getAvailableCourses.filter(
            (course) => !selectedCourses.some((selectedCourse) => selectedCourse.courseName === course.courseName)
        );
        availableState.setAvailableCourses = availableCourses;
        // render the selected courses
        selectedState.renderSelectedCoursesResult();
        // set button disabled
        const selectButton = document.getElementById("select-button");
        selectButton.disabled = true;
    };

    const bootstrap = () => {
        init();
        const availableCoursesContainer = document.querySelector(view.domStr.availableCourses);
        availableCoursesContainer.addEventListener("click", handleCourseClick);

        const selectButton = document.getElementById("select-button");
        selectButton.addEventListener("click", handleSelectClick);
    };

    return {
        bootstrap,
    };
})(View, Model);

Controller.bootstrap();

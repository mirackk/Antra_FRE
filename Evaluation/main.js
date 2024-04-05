const Api =(()=>{
    const url = "http://localhost:4232/courseList";
    const getData = fetch(url).then((res) => res.json());
    return {
        getData,
    };
})();

const View = (()=>{
    const domStr = {
        availableCourses: ".course-list",
    }
})();

const Model = ((view,api)=>{
    
})(View,Api);

const Controller = ((view,model)=>{
    const bootstrap = async ()=>{
        const {getData} = Api;
        const data = await getData;
        console.log(data);
    }
    return {
       bootstrap
    }
})();

Controller.bootstrap();
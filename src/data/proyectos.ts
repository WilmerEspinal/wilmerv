export type ProyectosProps = {
    title: string;
    info: string;
    img: string;
    hastag: any;
};

export const misProyectos: ProyectosProps[] = [
    {
        title: "1. Sistema Web Colegio Crayons",
        info: "Sistema web integral diseñado para directores, docentes y alumnos, que permite gestionar de manera eficiente el control de pagos de cuotas, el registro de asistencias, la matrícula de estudiantes y la administración de información académica.",
        img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397631/crayons-home_dzxnhf.png",
        hastag: ["#REACT", "#MYSQL", "#NODE JS", "#FLUTTER"],
    },
    {
        title: "2. Aprende Asháninka",
        info: "Plataforma interactiva para aprender el idioma Asháninka mediante imágenes y audios. Incluye aves, animales y saludos, permitiendo una experiencia de aprendizaje visual y auditiva.",
        img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397628/idioma-ashaninka_hwgle5.png",
        hastag: ["#REACT", "#NEXT JS", "#TAILWIND"],
    },
    {
        title: "3. Todo App - Challenge",
        info: "Aplicación sencilla y eficiente para organizar tareas diarias. Permite agregar, eliminar y gestionar tareas con una interfaz amigable.",
        img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397625/todo-app_vo5afx.png",
        hastag: ["#HTML", "#CSS", "#JAVASCRIPT"],
    }
];

#include <iostream>

/*  Autor: Valeria Briones Patiño
   Fecha de creación: 05/09/2025 */

class inicioPAM
{
	void Reglamento()
	{
	printf("1. Se requiere 80%% de asistencia para tener derecho a evaluacion parcial y 80%% de trabajos en clase.\n");
    printf("2. Se permiten 10 minutos de tolerancia y si el alumno llega despues de este tiempo puede permanecer en la clase, pero no se tomara la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).\n");
    printf("3. Las faltas deberan estar justificadas mediante el correo institucional con un plazo maximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor(a), justificantes entregados fuera de la fecha limite permitido no se aceptan, unicamente se aceptaran recetas medicas y citatorios juridicos. (De forma fisica deben ser presentados al tutor para ser validados y de forma posterior emitidos).\n");
    printf("4. Las tareas y trabajos deberan subirlas al Classroom de forma individual y no se recibiran de manera extemporanea. (Salvo previo justificante validado por el tutor)\n");
    printf("5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del limite no se aceptan.\n");
    printf("6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n");
    printf("7. El plagio o copia de trabajos y/o examenes, sera condicionado a reprobar a la asignatura y se reportara al area correspondiente.\n");
    printf("8. Cualquier deshonestidad academica sera sancionada reprobando el parcial sin derecho a examen final.\n");
    printf("9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes, administrativos, companeros o cualquier persona perteneciente a la universidad, se realizara una primera llama de atencion, si el alumno hace caso omiso tendra que abandonar el aula, tres incidencias de este tipo el alumno no tendra derecho a examen final o parcial.\n");
    printf("10. Uso de laptops y/o dispositivos moviles quedara limitados a uso exclusivo de las actividades que asi lo requieran.\n");
    printf("11. Prohibido el uso de audifonos durante la clase.\n");
    printf("12. Prohibido comer y/o tomar liquidos en el salon.\n");
    printf("13. Prohibido sentarse encima de las mesas, asi como columpiarse en las sillas.\n");
    printf("14. Todo tema academico debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinacion de tutores. En caso de no solucionarse pasar a la direccion del programa educativo (debe mantenerse este seguimiento de forma obligatoria).\n");
    printf("15. Cualquier situacion no prevista en el presente reglamento pasar directamente con la direccion del programa educativo.\n");
    printf("16. El dia destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese dia se entregaran examenes y se brindara retroalimentacion.\n");
    printf("17. Este reglamento entra en vigor despues de que se firme o se acepte por la mayoria de los estudiantes asistentes a la primera sesion de la materia, una vez firmado o aceptado por el 50%% mas el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no este presente en la primera sesion.\n");
    }
    
    void LineamientoClase()
    {
    	printf("Entregar los trabajos para su revisión \n");
    	printf("Entregas en pdf \n");
    	printf("Avisos de clase \n");
    	printf("Entregas autorizadas con retrazo, 5 Calificación máxima \n");
    	
	}
	
	void FechasParciales()
	{
		printf("1er Parcial: 01-10-25 \n");
		printf("2do Parcial: 05-11-25 \n");
		printf("3er Parcial: 03-12-25 \n");
		printf("Final: 08-12-25 \n");
		
	}
	
	void PorcentajesporParcial()
	{
		printf("                          1P  2P  3P \n");
		printf("EVIDENCIA DE CONOCIMIENTO 40% 40% 20% \n");
		printf("EVIDENCIA DE DESEMPEÑO    20% 20% 10% \n")
		printf("EVIDENCIA DE PRODUCTO     30% 20% 40% \n")
		printf("PROYECTO INTEGRADOR       10% 20% 30% \n")
		
	}

}

int main(int argc, char** argv) {
	 
	 Reglamento();
	 LineamientoClase();
	 FechasParciales();
	 PorcentajesporParcial();
	 
	 
	return 0;
}

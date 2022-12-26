Feature: Demo Cocumber // Como se llamara la prueba

    Ejemplo para la utilizacion de 'Cocumber'

    Scenario: Demo cocumber //Que es lo que se va a realizar
        Given Abrir navegador principal
        When cargando el nombre Diego_Juarez //ojo**
        When Cargando el email
        And Cargando la direccion Direccion_1 //ojo**
        Then Validar nombre de la pagina

Scenario: Demo cocumber 2 //Que es lo que se va a realizar
        Given Abrir navegador principal
        When cargando el nombre Marisela_Alvarez //ojo**
        When Cargando el email
        And Cargando la direccion Dir_123456 //ojo**
        Then Validar nombre de la pagina
#Ejemplos de multiples escenarios, Solo copiando el contenido del 'Feature'
#se ejecutan todos los pasos que se hayan programado

#Mismo Ejemplo pero con la funcion 'Scenario Outline' es la manera 'Profesional' de realizar la ejecucion

Scenario Outline: Scenario Outline name: Demo cocumber 
#Que es lo que se va a realizar
        Given Abrir navegador principal
        When cargando el nombre Diego_Juarez //ojo**
        When Cargando el email
        And Cargando la direccion Direccion_1 //ojo**
        Then Validar nombre de la pagina
    #A conyinuacion se utiliza la palabra 'Examples' donde se piden los parametros que se vana agregar a los  campos programados
    #Se pueden agregar cuantas lineas desees y seran el numero de ejecuciones que se realizaran
        Examples:
            | Diego | diego@gmail.com | Dir_1 |
            | Marisela | marisela@gmail.com | Dir_1 |
            | Juan | juan@gmail.com | Dir_1 |
            | Ruth | ruth@gmail.com | Dir_1 |
            | Benito | benito@gmail.com | Dir_1 |
            
            
            



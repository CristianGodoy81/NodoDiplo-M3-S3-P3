import { body } from 'express-validator';

export const registerValidationRules = ()=>
    [
        body('nombreSuperheroe')
            .notEmpty().withMessage('Campo obligatorio')
            .isLength({min:3,max:60}).withMessage('Entre 3 y 60 caracteres')
            .trim(),
        body('nombreReal')
            .notEmpty().withMessage('Campo obligatorio')
            .isLength({min:3,max:60}).withMessage('Entre 3 y 60 caracteres')
            .trim(),
        body('edad')
            .notEmpty().withMessage('Campo obligatorio')
            .isInt({min:0}).withMessage('Campo de numeros positivos')
            .trim(),
        body('poderes')
            .notEmpty().withMessage('Campo obligatorio') // ¿?
            .isArray({min:1}).withMessage('Campo obligatorio')
            .bail() // Detiene la ejecución de las validaciones siguientes si las anteriores fallan
            .custom(arr => arr.every(item => typeof item === 'string')).withMessage('Campo de tipo "string"') // every() devuelve true solo si todos cumplen la condición
            //.custom(arr => arr.every(item => !/\s/.test(item))).withMessage('Sin espacios en blanco')
            //.custom(arr => arr.every(item => item.length >= 3 && item.length <= 60)).withMessage('Entre 3 y 60 caracteres')
            ,
        body('poderes.*')
            .isLength({min:3,max:60}).withMessage('Entre 3 y 60 caracteres')
            .trim(),
    ];
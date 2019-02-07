import {Get, Controller, Res, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}




  @Get('login')
  mostrarLogin(
      @Res() res,
      @Query("mensaje") mensajeObtenido,
      @Query('error') error: string
  ) {
    let mensaje = undefined;

    if(error){
      mensaje = "Datos erroneos";
    }
    let mensajeVerificacion=undefined;
    if(mensajeObtenido){
      mensajeVerificacion=mensajeObtenido;
    }
    res.render('login', {mensajeVerificacion: mensajeVerificacion, mensaje:mensaje})
  }
}



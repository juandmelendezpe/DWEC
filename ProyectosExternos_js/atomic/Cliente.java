package ProyectosExternos_js.atomic;

import java.util.Date;
import java.util.Random;
import java.util.UUID;

public class Cliente {
    private int id;
    private String nombre;
    private String cuenta;
    private String pin;
    private double saldoPuntos;
    private Date fechaCreacion;

    public Cliente(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta = generarNumeroAleatorio(16);
        this.pin = generarNumeroAleatorio(4);
        this.fechaCreacion = new Date();
        this.saldoPuntos = 0;
    }

    private String generarNumeroAleatorio(int longitud) {
        StringBuilder sb = new StringBuilder(longitud);
        Random rnd = new Random();
        String caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (int i = 0; i < longitud; i++) {
            sb.append(caracteres.charAt(rnd.nextInt(caracteres.length())));
        }
        return sb.toString();
    }

    // Getters y Setters
}


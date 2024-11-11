import java.util.Date;
import java.util.UUID;

public class Transaccion {
    private int id;
    private int idCliente;
    private String numeroOperacion;
    private Date fechaTransaccion;
    private double puntosRecargados;
    private double consumidos;
    private Date expira;

    public Transaccion(int id, int idCliente, double puntosRecargados) {
        this.id = id;
        this.idCliente = idCliente;
        this.numeroOperacion = UUID.randomUUID().toString();
        this.fechaTransaccion = new Date();
        this.puntosRecargados = puntosRecargados;
        this.consumidos = 0;
        this.expira = new Date(fechaTransaccion.getTime() + (30L * 24 * 60 * 60 * 1000)); // 30 días
    }

    // Getters y Setters
}

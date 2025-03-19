numeroPersonas = int(input("Ingrese el numero de personas que quiere registrar: "))

listaOriginal = []

for i in range(1, numeroPersonas + 1):
  nombre = input(f'Ingrese el nombre de la persona n° ${i} ')
  edad = int(input("Ingrese la edad de la persona "))
  nota = float(input("Ingrese la nota de la persona "))

  datosPersona = [nombre, edad, nota]
  listaOriginal.append(datosPersona)

def ordenarPorNotas():
  print('Lista original: ', listaOriginal)
  ordenadoPorNota = sorted(listaOriginal, key=lambda x: x[2], reverse=True)
  print("Lista ordenada por nota: ", ordenadoPorNota)

ordenarPorNotas()
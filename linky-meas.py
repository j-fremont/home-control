import serial
import datetime
import requests

iinst = None
#papp = None

def main():

  with serial.Serial(port='/dev/ttyS0', baudrate=1200, parity=serial.PARITY_NONE, stopbits=serial.STOPBITS_ONE, bytesize=serial.SEVENBITS, timeout=1) as ser:

    while True:

      finish = datetime.datetime.now() + datetime.timedelta(seconds=60)

      nb_iinst = 0
      sum_iinst = 0

      #nb_papp = 0
      #sum_papp = 0

      while datetime.datetime.now() < finish:

        line = ser.readline().decode("utf-8")

        if line.startswith('IINST'):
          iinst = int(line.split(' ')[1])
          sum_iinst = sum_iinst + iinst
          nb_iinst = nb_iinst + 1

        #if line.startswith('PAPP'):
        #  papp = int(line.split(' ')[1])
        #  sum_papp = sum_papp + papp
        #  nb_papp = nb_papp + 1

      #data="elec iinst=" + str(round(sum_iinst/nb_iinst, 2)) + "\nelec papp=" + str(round(sum_papp/nb_papp, 2))
      #print(data)

      data="elec iinst=" + str(round(sum_iinst/nb_iinst, 2))

      try:
        requests.post("http://192.168.1.10:8086/write?db=homedb&precision=m", data=data, headers={'Content-Type': 'application/octet-stream'})
      except requests.exceptions.RequestException as e:
        raise SystemExit(e)

if __name__ == '__main__':
  main()


### Python ve Çalışma Ortamı Kurulumu
Python ve çalışma ortamını Linux'ta kurmak oldukça basittir. İşte adım adım nasıl yapılacağı:

##### Adım 1: Sistem Güncelleme
Öncelikle, sistemimizi güncellememiz gerekiyor. Bu işlem, kullandığımız işletim sisteminin en son sürümüne sahip olmamızı sağlar. sisteminizi güncellemek içi naşağıdaki komutu kullanabilirsiniz:
```
sudo apt update && sudo apt upgrade
```

##### Adım 2: Python Kurulumu

Python'un son sürümünü yüklemek için aşağıdaki komutu kullanabilirsiniz:

```
sudo apt-get install python3
```

##### Adım 3: Paket Yöneticisi Kurulumu

Paket yöneticisi, Python paketlerini yönetmemizi sağlayan bir araçtır. Linux'ta en yaygın kullanılan paket yöneticisi `pip`'dir. Aşağıdaki komutu kullanarak `pip`'i yükleyebilirsiniz:
```
sudo apt-get install python3-pip
```

##### Adım 4: Sanal Ortam Kurulumu

Python projelerinde sanal ortamlar, projelerinizi kendi bağımsız çalışma ortamında yürütmenize olanak tanır. Bu sayede, projelerinizin diğer sistem bileşenleriyle uyumlu olmasını ve başka projelerinize etki etmemesini sağlayabilirsiniz. Aşağıdaki komutu kullanarak `virtualenv`'i yükleyebilirsiniz:

```
sudo apt-get install python3-venv
```

##### Adım 5: Sanal Ortam Oluşturma

Sanal ortam oluşturma işlemi oldukça basittir. Sanal ortamı oluşturmak için, projenizin bulunduğu klasöre geçin ve aşağıdaki komutu kullanın:
```
python3 -m venv venv
```
Bu komut, `venv` adında bir sanal ortam oluşturur.

##### Adım 6: Sanal Ortam Aktivasyonu

Sanal ortamı etkinleştirmek için aşağıdaki komutu kullanabilirsiniz:
```
source venv/bin/activate
```

Sanal ortamın aktif hale gelmesi, terminalinizin sol tarafında `(venv)` ifadesi görüntülenerek belirtilir.

##### Sonuç

Artık Python ve çalışma ortamınızın kurulumunu tamamladınız. Keyifli çalışmalar :)

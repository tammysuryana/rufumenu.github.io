<!DOCTYPE html>
<html>
<head>
<title> HAlaman tamabah </title>
</head>
<body>
<h2>Silahkan masukan gambar</h2> 

 <form action="" method="post" enctype="multypart/form-data">
 <table>
 <tr>
     <td>nama </td>
     <td> : </td>
     <td><input type='text' name="nama"/></td>
</tr>
<tr>
     <td>File </td>
     <td> : </td>
     <td><input type='file' name="gambar"/></td>
</tr>
<tr>
     <td> </td>
     <td> : </td>
     <td><input type='submit' name="kirim" value="kirim"/></td>
</tr>
 </table>
 </form>
        <?php
        if(isset($_POST['kirim'])){
            $nama = $_POST ['nama'];
            $nama_file = $_FILES ['name']['gambar'];
            $source = $_FILES ['tmp_name']['gambar'];
            $folder = "./apload/";
            
            move_uploaded_file ($source, $folder.$nama_file );
            $insert = mysqli_query($conn, "INSERT INTO tb_gambar VALUES
            NULL,
            '$nama',
            '$nama_file'");
            
            if ($insert){
                echo "berhasil d upload ";
            }else {
                echo "gagal cuy";
            }
        }
        ?>


 </body>
</html>
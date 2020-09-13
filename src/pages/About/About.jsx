import React from 'react';
import Layout from '../../components/Layout/Layout';

function About() {
    return(
        <div>
            <Layout>
            <div className="container">
                 <h1 className="text-center m-6" style={{padding:20}}>Echipa noastră</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <div className="card"  >
                        <img src="https://scontent.fsbz1-2.fna.fbcdn.net/v/t1.0-9/118268792_3235592326548781_5766471555314547545_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=tUBmACUj9xAAX8VGsYD&_nc_ht=scontent.fsbz1-2.fna&oh=a88aa312bc9b529c6b4e3239a236de81&oe=5F82FDB2" className="card-img-top" alt="asd" />
                        <div className="card-body">
                            <h5 className="card-title">Vulpe Andreea</h5>
                            <p className="card-text">Câteva date relevante inserate chiar aici chiar acum</p>
                            <a href="https://www.facebook.com/andreeavulpe.i" className="btn btn-primary">Cunoaște-o mai bine</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                    <div className="card"  >
                        <img src="https://i.imgur.com/j6AJwIk.jpg" className="card-img-top" alt="asd" />
                        <div className="card-body">
                            <h5 className="card-title">Ivan Vlad</h5>
                            <p className="card-text">Alte date relevante introduse aici</p>
                            <a href="https://www.facebook.com/vlad.ivan.33" className="btn btn-primary">Cunoaște-l mai bine</a>
                        </div>
                        </div>
                    </div>
                </div>
             

              
               
            <div style ={{paddingTop: 50}}>
              <p>
               Broderia este arta decorarii țesăturilor si materialelor cu ac și ață sau fire speciale, cu scopul de a infrumuseta si personaliza diferite obiecte, de la îmbrăcăminte la elemente de deco. Cu siguranta ca si in moda, orice designer inspirat poate oferi un aspect unic creatiilor sale, folosind broderia ca pe un instrument puternic, prin care se poate remarca, asa cum a facut-o Rozalia Bot pe piata din Romania si nu doar.
              </p>
              <p>
                Originea broderiei poate fi datată înainte de Hristos, însă, modul în care o regasim astăzi este practicat de decenii deja. Atat general, cat si in industria modei, in particular, broderia se traduce prin atentia dedicata detaliilor, si, deci, dorinta de a conferi personalitate unui produs.
                </p>
              <p>
                Datorita inovatiilor in industria textilelor, putem vorbi astazi despre masini de cusut performante, procese automatizate si, in consecinta, despre broderia computerizata. Totusi, Rozalia Bot consideră acest procedeu ca fiind impersonal si a optat sa valorifice talentul prezent in familia ei. Astfel, mama sa, cu o experienta de peste 50 de ani în aceasta tehnica, insufleteste fiecare articol vestimentar creat de designer, brodand cu har si rabdare pentru ca tu sa te bucuri de un produs unic.
                </p>
                <p>
                Broderia manual-mecanică este realizată folosindu-se masinile de cusut de uz casnic, prin ghidarea gherghefului, a acului cu fir, cusatura dupa cusătură de-a lungul modelului trasat in prealabil pe material. Asadar, desi acest proces cere mult timp si o atentie deosebita, avem in final un produs finit cu o amprenta speciala dupa ore in sir de munca. Produsul tau va fi brodat manual, va fi unic, frumos, realizat la standarde de calitate cat mai inalte.
                </p>
                <p>
                Cu toate acestea, trebuie mentionat ca broderia poate prezenta un aspect neregulat în ce priveste simetria designului sau culoarea, si vă rugăm să le interpretati ca semne distinctive ale lucrului manual, ca mici imperfectiuni ce tin de identitatea produsului, si nu ca defecte. Vă mulțumim ca ne onorati munca purtand Rozalia Bot!

                </p>
                </div>
               </div>
            </Layout>
        </div>
    );
}

export default About;
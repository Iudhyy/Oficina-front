import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

    
export default function CadastroPedido(){
    const [combustivel,setCombustivel] = useState("");

    const [ar, setAr] = useState(false);
    const [alarme, setAlarme] = useState(false);
    const [dhCambio, setDhCambio] = useState(false);
    const [automatico, setAutomatico] = useState(false);
    const [automatizado, setAutomatizado] = useState(false);
    const [cvt, setCvt] = useState(false);
    const [manual, setManual] = useState(false);
    const [abs, setAbs] = useState(false);
    const [airbag, setAirbag] = useState(false);
    const [qxq, setQxq] = useState(false);
    const [qx2, setQx2] = useState(false);
    const [gasolina, setGasolina] = useState(false);
    const [etanol, setEtanol] = useState(false);
    const [flex, setFlex] = useState(false);
    const [gnv, setGnv] = useState(false);
    const [diesel, setDiesel] = useState(false);
    const [estepe, setEstepe] = useState(false);
    const [macaco, setMacaco] = useState(false);
    const [chaveDeRoda, setChaveDeRoda] = useState(false);
    const [triangulo, setTriangulo] = useState(false);
    const [antena, setAntena] = useState(false);
    const [vidroEletrico, setVidroEletrico] = useState(false);
    const [travaEletrica, setTravaEletrica] = useState(false);
    const [calotas, setCalotas] = useState(false);
    const [paraBrisaTrincado, setParaBrisaTrincado] = useState(false);
    const [radio, setRadio] = useState(false);
    const [cortaCorrente, setCortaCorrente] = useState(false);
    const [extintor, setExtintor] = useState(false);
    const [buzina, setBuzina] = useState(false);
    const [protetorCarter, setProtetorCarter] = useState(false);
    const [chaveSegredo, setChaveSegredo] = useState(false);
    const [tapetes, setTapetes] = useState(false);
    const [acendedor, setAcendedor] = useState(false);

    const options = [

      {
        value:"Gasolina",label:"Gasolina"
      },
      {
        value:"Etanol",label:"Etanol"
      },
      {
        value:"FLEX",label:"FLEX"
      },
      {
        value:"GNV",label:"GNV"
      },
      {
        value:"Diesel",label:"Diesel"
      },

    ]

    const [row,setRow] = useState(0);

const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10
useEffect(() => {
  salvardados(page);
}, [page, perPage]);

 const [msg,setMsg] = useState("");     
 const navigate = useNavigate();
  const [entrada, setEntrada] = useState("");
  const [previsao, setPrevisao] = useState("");
  const [placa,setPlaca] = useState("");
  const [kmEntrada, setKmEntrada] = useState("");
  const [kmSaida, setKmSaida] = useState("");
  const [os, setOs] = useState("");
  const [idVeiculo, setIdVeiculo] = useState(1);
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [corPredominante, setCorPredominante] = useState("");
  const [chassis, setChassis] = useState("");
  const [codMotor, setCodMotor] = useState("");
  const [valvulas, setValvulas] = useState("");
  const [cilindros, setCilindros] = useState("");
  const [cilindradas, setCilindradas] = useState("");
  const [seguro, setSeguro] = useState("");
  const [luzAnomalia, setLuzAnomalia] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let i = 0;
    setErrorMsg([]);
    if (i === 0) {
      // faça sua chamada para salvar os dados aqui
      console.log("Dados salvos com sucesso!");
    } else {
      alert("Preencha todos os campos!!!");
    }
  };

  function handleCheckboxChange() {
    setAr(!ar);
    alert(ar)
  }
  function handleAlarmeChange() {
    setAlarme(!alarme);
  }
  
  function handleDhCambioChange() {
    setDhCambio(!dhCambio);
  }
  
  function handleAutomaticoChange() {
    setAutomatico(!automatico);
  }
  
  function handleAutomatizadoChange() {
    setAutomatizado(!automatizado);
  }
  
  function handleCvtChange() {
    setCvt(!cvt);
  }
  
  function handleManualChange() {
    setManual(!manual);
  }
  
  function handleAbsChange() {
    setAbs(!abs);
  }
  
  function handleAirBagChange() {
    setAirbag(!airbag);
  }
  
  function handleQx2Change() {
    setQx2(!qx2);
  }
  function handleQxqChange() {
    setQxq(!qxq);
  }
  
  function handleGasolinaChange() {
    setGasolina(!gasolina);
  }
  
  function handleEtanolChange() {
    setEtanol(!etanol);
  }
  
  function handleFlexChange() {
    setFlex(!flex);
  }
  
  function handleGnvChange() {
    setGnv(!gnv);
  }
  
  function handleDieselChange() {
    setDiesel(!diesel);
  }
  
  function handleEstepeChange() {
    setEstepe(!estepe);
  }
  
  function handleMacacoChange() {
    setMacaco(!macaco);
  }
  
  function handleChaveDeRodaChange() {
    setChaveDeRoda(!chaveDeRoda);
  }
  
  function handleTrianguloChange() {
    setTriangulo(!triangulo);
  }
  
  function handleAntenaChange() {
    setAntena(!antena);
  }
  
  function handleVidroEletricoChange() {
    setVidroEletrico(!vidroEletrico);
  }
  
  function handleTravaEletricaChange() {
    setTravaEletrica(!travaEletrica);
  }
  
  function handleCalotasChange() {
    setCalotas(!calotas);
  }
  
  function handleParaBrisaTrincadoChange() {
    setParaBrisaTrincado(!paraBrisaTrincado);
  }
  
  function handleRadioChange() {
    setRadio(!radio);
  }
  
  function handleCortaCorrenteChange() {
    setCortaCorrente(!cortaCorrente);
  }
  
  function handleExtintorChange() {
    setExtintor(!extintor);
  }
  
  function handleBuzinaChange() {
    setBuzina(!buzina);
  }
  
  function handleProtetorCarterChange() {
    setProtetorCarter(!protetorCarter);
  }
  
  function handleChaveSegredoChange() {
    setChaveSegredo(!chaveSegredo);
  }
  
  function handleTapetesChange() {
    setTapetes(!tapetes);
  }
  
  function handleAcendedorChange() {
    setAcendedor(!acendedor);
  }


 
 
 

  function handleCombustivelChange(selectedOption) {
    setCombustivel(selectedOption.value);
  }
  
  
  
  
  
  

              
   async function salvardados(e,page){
     
        e.preventDefault();

        let i = 0;
        let errorMsg = [];

   
        if(i==0){
           
            const lista = {
             	entrada:entrada,
               previsao:previsao,
               km_entrada:kmEntrada,
               km_saida:kmSaida,
               placa:placa,
               os:os,
               id_veiculo:idVeiculo,
               marca:marca,
               ano:ano,
               corpredominante:corPredominante,
               chassis:chassis,
               codmotor:codMotor,
               valvulas:valvulas,
               cilindros:cilindros,
               cilindradas:cilindradas,
               seguro:seguro,
               luzanomalia:luzAnomalia,
               ar,alarme,
               dh_cambio:dhCambio,
               automatico,
               automatizado,
               cvt,
               manual,
               combustivel,
            abs,airbag,qxq,qx2,gasolina,etanol,flex,gnv,diesel,
            estepe,macaco,chave_de_roda:chaveDeRoda,triangulo,antena,vidro_eletrico:vidroEletrico,trava_eletrica:travaEletrica,calotas,
            para_brisa_trincado:paraBrisaTrincado,radio,corta_corrente:cortaCorrente,extintor,buzina,protetor_de_carter:protetorCarter,chave_segredo:chaveSegredo,
            tapetes,acendedor                                               
            }
     
            try {
              const response = await fetch(`http://10.1.2.106:5000/lista`, {
                method: "POST",
                body: JSON.stringify(lista),
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                }
              });
              if (response.ok) {
                alert("dados salvos com sucesso!");
            
                window.location.href="/listapedido"
              } else {
                console.log("dados inválidos!!!!")
               
              }
            } catch (error) {
              console.log(error);
            }
                        
       
        }
          

         else{
             setMsg(errorMsg);
             console.log(msg)
        }
        
    }

    function handlePageChange(newPage) {
      setPage(newPage);
    }
 return(
  <div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Pedido" />
            

            <div class="formulario">

       <form onSubmit={salvardados}> 
              <div className="div_campos">
          
            <div class="campos">
            <label>Combustível</label>
            <Select
              value={{ value: combustivel, label: combustivel }}
              onChange={handleCombustivelChange}
              options={options}
            /> 
             </div>

                            <div class="campos">
                            <label>Entrada</label>
                                  <input
                                        type="date"
                                        value={entrada}
                                        onChange={(e) => setEntrada(e.target.value)}
                                      />
                                      
                              </div>
                            <div class="campos">
                            <label>Previsão</label>
                                  <input
                                        type="date"
                                        value={previsao}
                                        onChange={(e) => setPrevisao(e.target.value)}
                                      />
                                      
                              </div>
                            <div class="campos">
                            <label>Placa</label>
                                  <input
                                        type="text"
                                        value={placa}
                                        onChange={(e) => setPlaca(e.target.value)}
                                      />
                                      
                              </div>
                            <div class="campos">
                               <label>O.S</label>
                                  <input
                                        type="text"
                                        value={os}
                                        onChange={(e) => setOs(e.target.value)}
                                      />
                                      
                              </div>
                              
      </div> 
      <div className="div_campos">

               

                              <div class="campos">
                                <label>Km Entrada</label>
                                    <input
                                    type="text"
                                    value={kmEntrada}
                                    onChange={(e) => setKmEntrada(e.target.value)}
                                    />
                             </div>
                             <div class="campos">
                               <label>Km Saida</label>
                                    <input
                                   type="text"
                                   value={kmSaida}
                                  onChange={(e) => setKmSaida(e.target.value)}
                                />
                                </div>
                                <div class="campos">
                                  <label>Os</label>
                                   <input
                                   type="text"
                                   value={os}
                                   onChange={(e) => setOs(e.target.value)}
                                  />
                              </div>
                              <div class="campos">
                                <label>Id Veiculo</label>
                                   <input
                                    type="text"
                                    value={idVeiculo}
                                     onChange={(e) => setIdVeiculo(e.target.value)}
                                  />
                               </div>
                              <div class="campos">
                                <label>Marca</label>
                                     <input
                                      type="text"
                                      value={marca}
                                      onChange={(e) => setMarca(e.target.value)}
                                  />
                                  </div>

                      
        
      </div>
      <div className="div_campos">

          

                    <div class="campos">
                      <label>Ano</label>
                      <input
                          type="text"
                          value={ano}
                          onChange={(e) => setAno(e.target.value)}
                        />
                    </div>
                    <div class="campos">
                      <label>Cor Predominante</label>
                       <input
                         type="text"
                         value={corPredominante}
                         onChange={(e) => setCorPredominante(e.target.value)}
                       />
                     </div>
                     <div class="campos">
                       <label>Chassis</label>
                          <input
                             type="text"
                              value={chassis}
                             onChange={(e) => setChassis(e.target.value)}
                           />
                      </div>
                      <div class="campos">
                        <label>Codigo Motor</label>
                           <input
                             type="text"
                              value={codMotor}
                               onChange={(e) => setCodMotor(e.target.value)}
                           />
                          </div>


             


      </div>
      <div className="div_campos">

          

              <div class="campos">
                <label>Valvulas</label>
                 <input
                  type="text"
                   value={valvulas}
                   onChange={(e) => setValvulas(e.target.value)}
                  />
                </div>
                <div class="campos">
                  <label>Cilindros</label>
                    <input
                    type="text"
                     value={cilindros}
                    onChange={(e) => setCilindros(e.target.value)}
                    />
                  </div>
                  <div class="campos">
                    <label>Cilindradas</label>
                    <input
                      type="text"
                      value={cilindradas}
                      onChange={(e) => setCilindradas(e.target.value)}
                     />
                    </div>
                    <div class="campos">
                      <label>Seguro</label>
                     <input
                       type="text"
                       value={seguro}
                       onChange={(e) => setSeguro(e.target.value)}
                       />
                    </div>
                    <div class="campos">
                      <label>Luz Anomalia</label>
                         <input
                            type="text"
                            value={luzAnomalia}
                            onChange={(e) => setLuzAnomalia(e.target.value)}
                          />
                      </div>

          
        
         </div>
         


            <div className="checkboxs">
                <div className="checkbox">
                  <label>
                   <input type="checkbox" checked={ar} onChange={handleCheckboxChange} />
                   ar{ar}
                  </label>
                </div>

                <div className="checkbox">
                   <label>
                    <input type="checkbox" checked={alarme} onChange={handleAlarmeChange} />
                    Alarme
                   </label>
                 </div>

                 <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={dhCambio} onChange={handleDhCambioChange} />
                     Dh Cambio
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={automatico} onChange={handleAutomaticoChange} />
                     Automático
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={automatizado} onChange={handleAutomatizadoChange} />
                     Automatizado
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={cvt} onChange={handleCvtChange} />
                     CVT
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={manual} onChange={handleManualChange} />
                     Manual
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={abs} onChange={handleAbsChange} />
                     ABS
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={airbag} onChange={handleAirBagChange} />
                     AIR BAG
                    </label>
                </div>

                </div>

                <div className="checkboxs">

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={qx2} onChange={handleQx2Change} />
                     4x2
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={qxq} onChange={handleQxqChange} />
                     4x4
                    </label>
                </div>

               
               
               
               
               

                
                
                
                
              


                {/* <div> */}
      {/* <label htmlFor="combustivel">Escolha um combustível:</label> */}
      {/* <select id="combustivel" value={combustivel} onChange={handleCombustivelChange}> */}
        {/* {combustivelOptions.map((option) => ( */}
          {/* // <option key={option} value={option}> */}
            {/* {option} */}
          {/* </option> */}
        {/* // ))} */}
      {/* </select> */}
    {/* </div> */}




                {/* <div className="checkbox"> */}
                    {/* <label> */}
                     {/* <input type="checkbox" checked={gasolina} onChange={handleGasolinaChange} /> */}
                     {/* Gasolina */}
                    {/* </label> */}
                {/* </div> */}

                {/* <div className="checkbox"> */}
                    {/* <label> */}
                     {/* <input type="checkbox" checked={etanol} onChange={handleEtanolChange} /> */}
                     {/* Etanol */}
                    {/* </label> */}
                {/* </div> */}

                {/* <div className="checkbox"> */}
                    {/* <label> */}
                     {/* <input type="checkbox" checked={flex} onChange={handleFlexChange} /> */}
                     {/* Flex */}
                    {/* </label> */}
                {/* </div> */}
{/*                  */}
                {/* <div className="checkbox"> */}
                    {/* <label> */}
                     {/* <input type="checkbox" checked={gnv} onChange={handleGnvChange} /> */}
                     {/* GNV */}
                    {/* </label> */}
                {/* </div> */}

                {/* <div className="checkbox"> */}
                    {/* <label> */}
                     {/* <input type="checkbox" checked={diesel} onChange={handleDieselChange} /> */}
                     {/* Diesel */}
                    {/* </label> */}
                {/* </div> */}

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={estepe} onChange={handleEstepeChange} />
                     Estepe
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={macaco} onChange={handleMacacoChange} />
                     Macaco
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={chaveDeRoda} onChange={handleChaveDeRodaChange} />
                     Chave De Roda
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={triangulo} onChange={handleTrianguloChange} />
                     Triângulo
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={antena} onChange={handleAntenaChange} />
                     Antena
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={vidroEletrico} onChange={handleVidroEletricoChange} />
                     Vidro Eletrico
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={travaEletrica} onChange={handleTravaEletricaChange} />
                     Trava Eletrica
                    </label>
                </div>
                </div>
  <div className="checkboxs">

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={calotas} onChange={handleCalotasChange} />
                     Calotas
                    </label>
                </div>

              

              

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={paraBrisaTrincado} onChange={handleParaBrisaTrincadoChange} />
                     Para Brisa Trincado
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={radio} onChange={handleRadioChange} />
                     Rádio
                    </label>
                </div>
               
                <div className="checkboxs">
                
                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={cortaCorrente} onChange={handleCortaCorrenteChange} />
                     Corta Corrente
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={extintor} onChange={handleExtintorChange} />
                      Extintor
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={buzina} onChange={handleBuzinaChange} />
                     Buzina
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={protetorCarter} onChange={handleProtetorCarterChange} />
                     Protetor De Carter
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={chaveSegredo} onChange={handleChaveSegredoChange} />
                     Chave Segredo
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={tapetes} onChange={handleTapetesChange} />
                     Tapetes
                    </label>
                </div>

                <div className="checkbox">
                    <label>
                     <input type="checkbox" checked={acendedor} onChange={handleAcendedorChange} />
                     Acendedor
                    </label>
                </div>
                </div>
            </div>


            
<div className="div_campos">
<button className="button_save" type="submit" >
     Salvar
 </button>    
</div>
 
 
 
  </form>
  </div>

    </div>
    
  </div>

 )   
 }
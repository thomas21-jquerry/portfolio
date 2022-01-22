import React , {Component} from 'react';


export default class Experience extends Component{
    constructor(){
        super();
    }



    render() {
        return (
            <div className='Skill' id='#Experience'>
              
            <div className='SkillContainer'>
                <h1>Skills</h1>
                <br />
                <hr />
                <div>
                    < button class="button-33" role="button">Node</button>
                    < button class="button-33" role="button">React</button>
                    < button class="button-33" role="button">Python</button>
                    < button class="button-33" role="button">Flask</button>
                    < button class="button-33" role="button">Solidity</button>
                    < button class="button-33" role="button">Blockchain</button>
                </div>
                {/* <div id='ExperienceText'>
                    <Ring /> 
                    <h4>hellow</h4>
                </div> */}
            </div>
            
        </div>
        );
       
    }
}

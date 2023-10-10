"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`

      INSERT INTO features ( title, description, status, icon, content, uniqid) VALUES
      ('Senior Financial Analyst', 'Contusion of left forearm, initial encounter', 'featured', 'Delta Victor India Mike Papa Juliett Bravo Alfa November X-ray Kilo Oscar Echo Uniform Romeo Lima Foxtrot Quebec Golf', 'Removal of Drainage Device from Liver, Percutaneous Endoscopic Approach', 'IoRx-HKHJ'),
      ('Research Nurse', 'Injury of oth nerves at lower leg level, unsp leg, init', 'featured', 'Charlie Papa Oscar Tango Uniform November Whiskey Quebec X-ray Lima Bravo Mike Golf', 'Repair Pons, Percutaneous Approach', 'jrmTjY-br'),
      ('Structural Analysis Engineer', 'Type II occipital condyle fracture, unspecified side', 'active', 'Lima Juliett Foxtrot Zulu Tango Delta Bravo Papa Echo Mike Hotel Sierra Alfa November Quebec', 'Reposition Right Shoulder Joint, Open Approach', 'Qf-MT'),
      ('Dental Hygienist', 'Unspecified fracture of toe', 'featured', 'Delta Golf Lima Victor Uniform Kilo November Foxtrot Juliett Mike Oscar X-ray Echo Romeo Whiskey Tango India Alfa Yankee Hotel', 'Repair Accessory Pancreatic Duct, Via Natural or Artificial Opening Endoscopic', 'sYJNuX-ie'),
      ('Software Engineer I', 'Failure of sterile precautions during infusn/transfusn', 'active', 'X-ray Zulu Foxtrot Kilo Charlie Golf Hotel Juliett Mike Lima Bravo Whiskey Victor Echo Quebec Romeo', 'Fusion of Cervicothoracic Vertebral Joint with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Percutaneous Approach', 'ucXhs-vs'),
      ('Office Assistant I', 'Benign neoplasm of left ureter', 'featured', 'Zulu Bravo Echo Quebec Hotel Foxtrot Golf Juliett Papa Victor Delta Kilo Lima November', 'Caregiver Training in Vocational Activities and Functional Community or Work Reintegration Skills', 'XuY-xl'),
      ('Clinical Specialist', 'Oth symptoms and signs w cognitive functions and awareness', 'featured', 'Romeo Bravo Kilo November Echo Oscar Tango Yankee Charlie Delta', 'Removal of Autologous Tissue Substitute from Right Tarsal Joint, Percutaneous Approach', 'gkL-Bji'),
      ('Compensation Analyst', 'Family history of malignant neoplasm of testis', 'featured', 'Juliett Foxtrot Lima Quebec Alfa Bravo Romeo Victor Tango Delta Charlie Papa Echo Zulu Mike', 'Resection of Lower Esophagus, Via Natural or Artificial Opening', 'EWQtV-Xor'),
      ('Structural Analysis Engineer', 'Striking against other stationary object, subs encntr', 'active', 'Tango Charlie Victor Foxtrot Juliett Romeo Golf November Alfa Kilo Zulu Whiskey Yankee Oscar', 'Replacement of Right Renal Artery with Nonautologous Tissue Substitute, Open Approach', 'FFcqF-WqhN'),
      ('Programmer Analyst IV', 'Mood disorder due to known physiological condition, unsp', 'active', 'Tango Sierra Papa November Hotel Whiskey Kilo Victor Golf Foxtrot Juliett Yankee Zulu Mike Charlie Delta', 'Excision of Right Foot Tendon, Percutaneous Approach, Diagnostic', 'bjeNil-PAD'),
      ('Chemical Engineer', 'Displaced apophyseal fx unsp femur, init for opn fx type I/2', 'active', 'Tango Lima India Juliett Hotel Papa Foxtrot Golf Delta Whiskey Oscar Romeo Alfa Victor Echo November Sierra Quebec X-ray', 'Extraction of Nasal Turbinate, Percutaneous Endoscopic Approach', 'ya-lvVO'),
      ('Sales Associate', 'Tinea manuum', 'active', 'Oscar Quebec Mike Tango Whiskey Juliett Golf Sierra Foxtrot November Hotel Echo Uniform Lima Papa Delta Kilo Charlie Bravo', 'Revision of Synthetic Substitute in Right Knee Joint, Patellar Surface, External Approach', 'vOhyXZ-WI'),
      ('Physical Therapy Assistant', 'Descemetocele, left eye', 'active', 'Quebec Alfa Sierra Kilo Delta Lima Charlie Mike Yankee India', 'Bypass Inferior Vena Cava to Lower Vein with Synthetic Substitute, Percutaneous Endoscopic Approach', 'gPVKa-aGa'),
      ('Automation Specialist IV', 'Strain of musc/fasc/tend at wrist and hand level, unsp hand', 'featured', 'Yankee Romeo November Mike Uniform Bravo Hotel Papa Golf Echo Foxtrot', 'Bypass Coronary Artery, Four or More Arteries from Left Internal Mammary with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach', 'ob-hfBM'),
      ('Payment Adjustment Coordinator', 'Puncture wound without foreign body of right wrist, sequela', 'featured', 'Alfa Uniform India Delta Victor Mike Kilo Tango Yankee Zulu November Golf Echo Bravo', 'Removal of Radioactive Element from Peritoneum, Percutaneous Endoscopic Approach', 'xzyiXk-hCL');
        
        
        
        `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE features");
    },
};

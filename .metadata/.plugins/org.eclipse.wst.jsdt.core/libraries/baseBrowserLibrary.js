/*******************************************************************************
 * Copyright (c) 2008, 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

/**
 * Object DOMException()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Object
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Object
 */
function DOMException(){};
DOMException.prototype = new Object();
/**
 * Constant DOMException.INDEX_SIZE_ERR=1
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.          
 */
DOMException.INDEX_SIZE_ERR=1;
/**
 * Constant DOMException.DOMSTRING_SIZE_ERR=2
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.DOMSTRING_SIZE_ERR=2;
/**
 * Constant DOMException.HIERARCHY_REQUEST_ERR=3
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.           
 */
DOMException.HIERARCHY_REQUEST_ERR=3;
/**
 * Constant DOMException.WRONG_DOCUMENT_ERR=4
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.WRONG_DOCUMENT_ERR=4;
/**
 * Constant DOMException.INVALID_CHARACTER_ERR=5
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.          
 */
DOMException.INVALID_CHARACTER_ERR=5;
/**
 * Constant DOMException.NO_DATA_ALLOWED_ER=6
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.NO_DATA_ALLOWED_ER=6;
/**
 * Constant DOMException.NO_MODIFICATION_ALLOWED_ERR=7
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.NO_MODIFICATION_ALLOWED_ERR=7;
/**
 * Constant DOMException.NOT_FOUND_ERR=8
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.          
 */
DOMException.NOT_FOUND_ERR=8;
/**
 * Constant DOMException.NOT_SUPPORTED_ERR=9
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.        
 */
DOMException.NOT_SUPPORTED_ERR=9;
/**
 * Constant DOMException.INUSE_ATTRIBUTE_ERR=10
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.INUSE_ATTRIBUTE_ERR=10;
/**
 * Constant DOMException.INVALID_STATE_ERR=11
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.INVALID_STATE_ERR=11;
/**
 * Constant DOMException.SYNTAX_ERR=12
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.        
 */
DOMException.SYNTAX_ERR=12;
/**
 * Constant DOMException.INVALID_MODIFICATION_ER=13
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.           
 */
DOMException.INVALID_MODIFICATION_ER=13;
/**
 * Constant DOMException.NAMESPACE_ERR=14
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.          
 */
DOMException.NAMESPACE_ERR=14;
/**
 * Constant DOMException.NVALID_ACCESS_ERR=15
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.         
 */
DOMException.INVALID_ACCESS_ERR=15;
/**
  * Property code
  * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
  * 
  * @type Number
  * @since Standard ECMA-262 3rd. Edition 
  * @since Level 2 Document Object Model Core Definition.   
  */
DOMException.prototype.code=0;

/**
 * Object DOMImplementation()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @augments Object
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see   Object     
 */
function DOMImplementation(){};
DOMImplementation.prototype = new Object();
/**
 * function hasFeature(feature, version)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} feature
 * @param {String} version
 * @returns {Boolean}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition. 
 */ 
DOMImplementation.prototype.hasFeature = function(feature, version){return false;};
/**
 * function createDocumentType(qualifiedName, publicId, systemId)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} qualifiedName
 * @param {String} publicId
 * @param {String} systemId
 * @returns {DocumentType}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see DocumentType
 */ 
DOMImplementation.prototype.createDocumentType = function(qualifiedName, publicId, systemId){return new DocumentType();};
/**
 * function createDocument(namespaceURI, qualifiedName, doctype)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} namespaceURI
 * @param {String} qualifiedName
 * @param {DocumentType} doctype
 * @returns {Document}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Document
 */ 
DOMImplementation.prototype.createDocument = function(namespaceURI, qualifiedName, doctype){return new HTMLDocument();}; 

/**
 * Object DocumentFragment()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see   Node    
 */
function DocumentFragment(){};
DocumentFragment.prototype=new Node(); 

/**
 * Object Document()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node  
 */ 
function Document(){};
Document.prototype = new Node();
/**
 * Property defaultView
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type  Window
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Window  
 */ 
Document.prototype.defaultView = new Window(); 
/**
 * Property doctype
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type  DocumentType
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see DocumentType   
 */ 
Document.prototype.doctype = new DocumentType(); 
/**
 * Property implementation
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *  
 * @type   DOMImplementation
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see DOMImplementation
 */ 
Document.prototype.implementation = new DOMImplementation();
/**
 * Property documentElement 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type   Element
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.    
 * @see Element
 */ 
Document.prototype.documentElement= new HTMLElement(); 
/**
 * Property styleSheets
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type   Array
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.    
 */ 
Document.prototype.styleSheets= new Array(); 
/**
 * function createElement(tagName)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} tagName
 * @returns {Element}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.  
 * @see Element  
 */  
Document.prototype.createElement=function(tagName){return new HTMLElement();}; 
/**
 * function createDocumentFragment()  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @returns {DocumentFragment}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition. 
 * @see DocumentFragment 
 */ 
Document.prototype.createDocumentFragment=function(){return new DocumentFragment();}; 
/**
 * function createTextNode(data)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} data
 * @returns {Text}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.  
 * @see Text 
 */ 
Document.prototype.createTextNode=function(data){return new Text();}; 
/**
 * function createComment(data)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} data
 * @returns {Comment}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition. 
 * @see Comment   
 */ 
Document.prototype.createComment=function(data){return new Comment();}; 
/**
 * function createCDATASection(data)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} data
 * @returns {CDATASection}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see CDATASection     
 */
Document.prototype.createCDATASection=function(data){}; 
/**
 * function createProcessingInstruction(target, data) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type ProcessingInstruction
 * @param {String} target
 * @param {String} data
 * @returns {ProcessingInstruction}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see ProcessingInstruction      
*/
Document.prototype.createProcessingInstruction=function(target, data){return new ProcessingInstruction();}; 
/**
 * function createAttribute(name) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *  
 * @param {String} name
 * @returns {Attr}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Attr   
 */
Document.prototype.createAttribute=function(name){return new Attr();}; 
/**
 * function createEntityReference(name) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *   
 * @param {String} name
 * @returns {EntityReference}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see EntityReference     
 */
Document.prototype.createEntityReference=function(name){return new EntityReference();}; 
/**
 * function getElementsByTagName(tagname)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} tagname
 * @returns {NodeList}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see NodeList     
 */
Document.prototype.getElementsByTagName=function(tagname){return new NodeList();}; 
/**
 * function importNode(importedNode, deep)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *  
 * @param {Node} importedNode
 * @param {Boolean} deep
 * @returns {Node}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node        
 */
Document.prototype.importNode=function(importedNode, deep){return new Node();}; 
/**
 * function createElementNS(namespaceURI, qualifiedName) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} namespaceURI
 * @param {String} qualifiedName
 * @returns {Element}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Element        
 */
Document.prototype.createElementNS=function(namespaceURI, qualifiedName){return new HTMLElement();}; 
/**
 * function createEvent(String eventType) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} eventType
 * @returns {Object}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Element        
 */
Document.prototype.createEvent=function(eventType){return new Object();}; 
/**
 * function createAttributeNS(namespaceURI, qualifiedName)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} namespaceURI
 * @param {String} qualifiedName
 * @returns {Attr}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see  Attr       
 */
Document.prototype.createAttributeNS=function(namespaceURI, qualifiedName){return new Attr();}; 
/**
 * function getElementsByTagNameNS(namespaceURI, localName)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {NodeList}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see  NodeList       
 */
Document.prototype.getElementsByTagNameNS=function(namespaceURI, localName){return new NodeList();}; 
/**
 * function getElementById(elementId)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} elementId
 * @returns {Element}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Element         
 */ 
Document.prototype.getElementById=function(elementId){return new HTMLElement();};

/**
 * Object Node()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Object
 * @constructor
 * @memberOf Node
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see EventTarget    
 */
function Node(){};
Node.prototype=new EventTarget(); 
/**
 * Constant Node.ELEMENT_NODE=1
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.ELEMENT_NODE=1; 
/**
 * Constant Node.ATTRIBUTE_NODE=2
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.ATTRIBUTE_NODE=2;
/**
 * Constant Node.TEXT_NODE=3
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.TEXT_NODE=3;
/**
 * Constant Node.CDATA_SECTION_NODE=4
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.CDATA_SECTION_NODE=4; 
/**
 * Constant Node.ENTITY_REFERENCE_NODE=5
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.ENTITY_REFERENCE_NODE=5; 
/**
 * Constant Node.ENTITY_NODE=6
 * @type Number
 * @memberOf Node
 * @see Node 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.

 * @see    http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html     
*/
Node.ENTITY_NODE=6;
/**
 * Constant Node.PROCESSING_INSTRUCTION_NODE=7
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.PROCESSING_INSTRUCTION_NODE=7; 
/**
 * Constant Node.COMMENT_NODE=8
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.COMMENT_NODE=8;
/**
 * Constant Node.DOCUMENT_NODE=9
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.DOCUMENT_NODE=9;
/**
 * Constant Node.DOCUMENT_TYPE_NODE=10
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.DOCUMENT_TYPE_NODE=10; 
/**
 * Constant Node.DOCUMENT_FRAGMENT_NODE=11
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.DOCUMENT_FRAGMENT_NODE=11; 
/**
 * Constant Node.NOTATION_NODE=12
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @constant
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */
Node.NOTATION_NODE=12;
/**
 * Property nodeName
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.  
 */ 
Node.prototype.nodeName = ""; 
/**
 * Property nodeValue
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */ 
Node.prototype.nodeValue = ""; 
/**
 * Property nodeType
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */  
Node.prototype.nodeType = 0; 
/**
 * Property parentNode 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Node
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node    
 */  
Node.prototype.parentNode=new Node(); 
/**
 * Property childNodes 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html  
 *  
 * @type NodeList
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see NodeList    
*/ 
Node.prototype.childNodes=new NodeList(); 
/**
 * Property firstChild 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Node
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node    
 */  
Node.prototype.firstChild=new Node(); 
/**
 * Property lastChild 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Node
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node    
 */  
Node.prototype.lastChild=new Node();  
/**
 * Property previousSibling 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Node
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node    
 */  
Node.prototype.previousSibling=new Node(); 
/**
 * Property nextSibling  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type Node
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node    
 */  
Node.prototype.nextSibling=new Node(); 
/**
 * Property attributes  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type NamedNodeMap
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 * @see NamedNodeMap
 */ 
Node.prototype.attributes=new NamedNodeMap();
/**
 * Property ownerDocument  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *  
 * @type Document
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Document    
 */ 
Node.prototype.ownerDocument = new HTMLDocument(); 
/**
 * Property namespaceURI 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html  
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.   
 */ 
Node.prototype.namespaceURI=""; 
/**
 * Property prefix 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *   
 * @type String
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */ 
Node.prototype.prefix = ""; 
/**
 * Property localName   
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *   
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */ 
Node.prototype.localName= "";
/**
 * function insertBefore(newChild, refChild) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 *   
 * @param {Node} newChild
 * @param {Node} refChild
 * @returns {Node}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.
 * @see Node  
 */  
Node.prototype.insertBefore = function(ne" T r i b u n e   C o n t e n t   A g e n c y \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 n 3 k 2 q l b 9 c c 1 _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 n 3 k 2 q l b 9 c c 1 _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " A   n e w   a r r o w w o r d   e v e r y   d a y .   \ \ r \ \ n \ \ r \ \ n Y o u   c a n   s o l v e   t h e   p u z z l e   i n   a n y   o r d e r .   C l i c k   a   s q u a r e   i n   t h e   g r i d   a n d   s t a r t   t y p i n g   t h e   s o l u t i o n .   Y o u   c a n   a l s o   u s e   t h e   a r r o w   k e y s   t o   n a v i g a t e   t h e   g r i d . \ " , \ " g e n r e s \ " : [ \ " W o r d \ " ] , \ " r e a s s i g n e d G e n r e s \ " : [ \ " W o r d \ " ] , \ " d e f a u l t R a n k \ " : 1 0 0 , \ " m a r k e t \ " : \ " p t - b r \ " , \ " p u b l i s h D a t e \ " : \ " 2 0 2 3 - 0 7 - 2 6 T 2 2 : 2 9 : 5 7 . 9 8 8 3 2 6 3 Z \ " , \ " u p l o a d D a t e \ " : \ " 0 0 0 1 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 \ " , \ " p u b l i s h e r I d \ " : \ " C N = 5 D D C 2 9 3 5 - B 0 8 B - 4 1 9 D - A 3 C 4 - 6 8 4 1 E A 0 B C 0 A 1 \ " , \ " p l a y U r l \ " : \ " h t t p s : / / w w w . m s n . c o m / p t - b r / p l a y / t h e - b i g - o n e / c g - 9 n 3 k 2 q l b 9 c c 1 \ " , \ " p r i m a r y G e n r e \ " : \ " U n k n o w n \ " , \ " i d \ " : \ " 9 n 3 k 2 q l b 9 c c 1 \ " , \ " c r e a t e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 2 6 Z \ " , \ " l a s t M o d i f i e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 2 6 Z \ " } , { \ " n a m e \ " : \ " T h e   D a i l y   C r o s s w o r d \ " , \ " d e f a u l t N a m e \ " : \ " T h e   D a i l y   C r o s s w o r d \ " , \ " p u b l i s h e r N a m e \ " : \ " T r i b u n e   C o n t e n t   A g e n c y \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 n w r r g d x k 3 n h _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 n w r r g d x k 3 n h _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " A   n e w   c r o s s w o r d   e v e r y   d a y .   \ \ r \ \ n \ \ r \ \ n Y o u   c a n   s o l v e   t h e   p u z z l e   i n   a n y   o r d e r .   C l i c k   a   c l u e   o r   a   c e l l   i n   t h e   g r i d   a n d   s t a r t   t y p i n g   t h e   s o l u t i o n .   Y o u   c a n   a l s o   u s e   t h e   a r r o w   k e y s   t o   n a v i g a t e   t h e   g r i d .   T h e   c l u e s   f o r   s o l u t i o n s   t h a t   a r e   c o m p l e t e d   a r e   g r a y e d   o u t ,   r e g a r d l e s s   o f   w h e t h e r   o r   n o t   y o u r   s o l u t i o n   i s   c o r r e c t . \ " , \ " g e n r e s \ " : [ \ " W o r d \ " ] , \ " r e a s s i g n e d G e n r e s \ " : [ \ " W o r d \ " ] , \ " d e f a u l t R a n k \ " : 1 0 0 , \ " m a r k e t \ " : \ " p t - b r \ " , \ " p u b l i s h D a t e \ " : \ " 2 0 2 3 - 0 7 - 2 6 T 2 2 : 2 9 : 5 7 . 1 5 6 5 6 4 7 Z \ " , \ " u p l o a d D a t e \ " : \ " 0 0 0 1 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 \ " , \ " p u b l i s h e r I d \ " : \ " C N = 5 D D C 2 9 3 5 - B 0 8 B - 4 1 9 D - A 3 C 4 - 6 8 4 1 E A 0 B C 0 A 1 \ " , \ " p l a y U r l \ " : \ " h t t p s : / / w w w . m s n . c o m / p t - b r / p l a y / t h e - d a i l y - c r o s s w o r d / c g - 9 n w r r g d x k 3 n h \ " , \ " p r i m a r y G e n r e \ " : \ " U n k n o w n \ " , \ " i d \ " : \ " 9 n w r r g d x k 3 n h \ " , \ " c r e a t e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 1 8 Z \ " , \ " l a s t M o d i f i e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 1 8 Z \ " } , { \ " n a m e \ " : \ " T h e   M i n i   C r o s s w o r d \ " , \ " d e f a u l t N a m e \ " : \ " T h e   M i n i   C r o s s w o r d \ " , \ " p u b l i s h e r N a m e \ " : \ " T r i b u n e   C o n t e n t   A g e n c y \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 n m 7 q q g l s p p 4 _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 n m 7 q q g l s p p 4 _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " S m a l l e r   b u t   t o u g h e r .   \ \ r \ \ n \ \ r \ \ n Y o u   c a n   s o l v e   t h e   p u z z l e   i n   a n y   o r d e r .   C l i c k   a   c l u e   o r   a   c e l l   i n   t h e   g r i d   a n d   s t a r t   t y p i n g   t h e   s o l u t i o n .   Y o u   c a n   a l s o   u s e   t h e   a r r o w   k e y s   t o   n a v i g a t e   t h e   g r i d .   T h e   c l u e s   f o r   s o l u t i o n s   t h a t   a r e   c o m p l e t e d   a r e   g r a y e d   o u t ,   r e g a r d l e s s   o f   w h e t h e r   o r   n o t   y o u r   s o l u t i o n   i s   c o r r e c t . \ " , \ " g e n r e s \ " : [ \ " W o r d \ " ] , \ " r e a s s i g n e d G e n r e s \ " : [ \ " W o r d \ " ] , \ " d e f a u l t R a n k \ " : 1 0 0 , \ " m a r k e t \ " : \ " p t - b r \ " , \ " p u b l i s h D a t e \ " : \ " 2 0 2 3 - 0 7 - 2 6 T 2 2 : 2 9 : 5 6 . 0 0 0 7 7 4 Z \ " , \ " u p l o a d D a t e \ " : \ " 0 0 0 1 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 \ " , \ " p u b l i s h e r I d \ " : \ " C N = 5 D D C 2 9 3 5 - B 0 8 B - 4 1 9 D - A 3 C 4 - 6 8 4 1 E A 0 B C 0 A 1 \ " , \ " p l a y U r l \ " : \ " h t t p s : / / w w w . m s n . c o m / p t - b r / p l a y / t h e - m i n i - c r o s s w o r d / c g - 9 n m 7 q q g l s p p 4 \ " , \ " p r i m a r y G e n r e \ " : \ " U n k n o w n \ " , \ " i d \ " : \ " 9 n m 7 q q g l s p p 4 \ " , \ " c r e a t e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 1 Z \ " , \ " l a s t M o d i f i e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 1 Z \ " } , { \ " n a m e \ " : \ " W o r d   s e a r c h   9 x 9 \ " , \ " d e f a u l t N a m e \ " : \ " W o r d   s e a r c h   9 x 9 \ " , \ " p u b l i s h e r N a m e \ " : \ " T r i b u n e   C o n t e n t   A g e n c y \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 p 6 r 3 l f 7 f d c 4 _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 p 6 r 3 l f 7 f d c 4 _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " W o r d s   i n   e v e r y   d i r e c t i o n .   \ \ r \ \ n \ \ r \ \ n C a n   y o u   f i n d   t h e m ?   Y o u r   g o a l   i s   t o   f i n d   t h e   l i s t e d   w o r d s   h i d d e n   a m o n g   t h e   l e t t e r s .   C a n   y o u   f i n d   t h e m   a l l ?   M a r k   t h e   w o r d s   a s   y o u   f i n d   t h e m .   T h e y   m a y   b e   f o u n d   h o r i z o n t a l l y ,   v e r t i c a l l y   o r   d i a g o n a l l y ,   a n d   i n   b o t h   d i r e c t i o n s . \ " , \ " g e n r e s \ " : [ \ " W o r d \ " ] , \ " r e a s s i g n e d G e n r e s \ " : [ \ " W o r d \ " ] , \ " d e f a u l t R a n k \ " : 1 0 0 , \ " m a r k e t \ " : \ " p t - b r \ " , \ " p u b l i s h D a t e \ " : \ " 2 0 2 3 - 0 7 - 2 6 T 2 2 : 2 9 : 5 4 . 9 7 8 5 3 7 8 Z \ " , \ " u p l o a d D a t e \ " : \ " 0 0 0 1 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 \ " , \ " p u b l i s h e r I d \ " : \ " C N = 5 D D C 2 9 3 5 - B 0 8 B - 4 1 9 D - A 3 C 4 - 6 8 4 1 E A 0 B C 0 A 1 \ " , \ " p l a y U r l \ " : \ " h t t p s : / / w w w . m s n . c o m / p t - b r / p l a y / w o r d - s e a r c h - 9 x 9 / c g - 9 p 6 r 3 l f 7 f d c 4 \ " , \ " p r i m a r y G e n r e \ " : \ " U n k n o w n \ " , \ " i d \ " : \ " 9 p 6 r 3 l f 7 f d c 4 \ " , \ " c r e a t e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 Z \ " , \ " l a s t M o d i f i e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 4 8 Z \ " } ] } , { \ " g e n r e I n f o \ " : { \ " g e n r e \ " : \ " C a r d \ " } , \ " g a m e s \ " : [ { \ " n a m e \ " : \ " R u m m y \ " , \ " d e f a u l t N a m e \ " : \ " R u m m y \ " , \ " p u b l i s h e r N a m e \ " : \ " C o d e   T h i s   L a b   s . r . l . \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 m x 7 w c z 3 s 1 w m _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 m x 7 w c z 3 s 1 w m _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " O s   t e u s   a d v e r s á r i o s   p o d e m   s e r   a t é   t r ê s   j o g a d o r e s   v i r t u a i s   o u   j o g a d o r e s   r e a i s   d e   t o d a s   a s   p a r t e s   d o   m u n d o . \ \ r \ \ n \ \ r \ \ n A   t u a   t a r e f a   c o n s i s t e   e m   s e r e s   o   p r i m e i r o   a   l i v r a r - t e   d e   t o d a s   a s   c a r t a s ,   f a z e n d o   c o m b i n a ç õ e s   a n t e s   d o s   t e u s   a d v e r s á r i o s . \ \ r \ \ n \ \ r \ \ n O   j o g o   é   b a s e a d o   n a s   r e g r a s   d a   v e r s ã o   c l á s s i c a   d e   R u m m y . \ " , \ " g e n r e s \ " : [ \ " C a r d \ " , \ " C l a s s i c s \ " ] , \ " r e a s s i g n e d G e n r e s \ " : [ \ " C a r d \ " , \ " C l a s s i c s \ " ] , \ " d e f a u l t R a n k \ " : 1 0 0 , \ " m a r k e t \ " : \ " p t - b r \ " , \ " p u b l i s h D a t e \ " : \ " 2 0 2 3 - 0 7 - 2 6 T 2 2 : 2 6 : 4 4 . 4 4 6 5 9 9 4 Z \ " , \ " u p l o a d D a t e \ " : \ " 0 0 0 1 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 \ " , \ " p u b l i s h e r I d \ " : \ " C N = 0 2 5 9 2 B A 2 - 2 D 0 E - 4 3 D 9 - B F 7 4 - 9 B 1 3 4 B 5 F 3 7 7 8 \ " , \ " p l a y U r l \ " : \ " h t t p s : / / w w w . m s n . c o m / p t - b r / p l a y / r u m m y / c g - 9 m x 7 w c z 3 s 1 w m \ " , \ " p r i m a r y G e n r e \ " : \ " U n k n o w n \ " , \ " i d \ " : \ " 9 m x 7 w c z 3 s 1 w m \ " , \ " c r e a t e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 5 3 3 9 Z \ " , \ " l a s t M o d i f i e d \ " : \ " 2 0 2 3 - 0 7 - 2 8 T 0 0 : 3 8 : 4 1 . 2 5 3 5 3 3 9 Z \ " } , { \ " n a m e \ " : \ " R e i s   e   R a i n h a s :   S o l i t a i r e   T r i   P e a k s \ " , \ " d e f a u l t N a m e \ " : \ " K i n g s   &   Q u e e n s :   S o l i t a i r e   T r i   P e a k s \ " , \ " p u b l i s h e r N a m e \ " : \ " C l e v e r   A p p s   P t e   L t d \ " , \ " t h u m b n a i l I d \ " : \ " O C G E . 9 p l v t 8 q k 4 h m 5 _ v 2 _ m a i n \ " , \ " h e r o T h u m b n a i l I d \ " : \ " O C G E . 9 p l v t 8 q k 4 h m 5 _ v 2 _ h e r o \ " , \ " d e s c r i p t i o n \ " : \ " É   u m   g r a n d e   m o m e n t o   p a r a   c o l h e r   u m   p o u c o   d e   d i v e r s ã o   d e   p a c i ê n c i a !   S e   v o c ê   g o s t a   d e   j o g o s   d e   c a r t a s   e   a s   p a l a v r a s   P y r a m i d ,   K l o n d i k e ,   S p i d e r   s i g n i f i c a m   a l g o   p a r a   v o c ê ,   o u   m e s m o   s e   v o c ê   e s t á   p r e s t e s   a   d e s c o b r i r   q u e b r a - c a b e ç a s   d e   p a c i ê n c i a ,   K i n g s   &   Q u e e n s   o   r e c e b e m   e m   s u a   j o r n a d a !   E s t a   b e l a   s a g a   t r i p e a k s   t e m   m u i t o   a   o f e r e c e r . \ \ n \ \ n T o r n e - s e   u m   m e m b r o   d e   h o n r a   d o   c l u b e   K i n g s   &   Q u e e n s   e   a p r o v e i t e   s u a s   v a n t a g e n s   s e m   f i m : \ \ n    S a b o r e i e   p a i s a g e n s   p i t o r e s c a s   e n q u a n t o   r e s o l v e   q u e b r a - c a b e ç a s   d e s a f i a d o r e s ! \ \ n -   C o m p l e t e   i n c o n t á v e i s   n í v e i s   d e   t r i   p e a k s   p a r a   s e   t o r n a r   o   m e s t r e   d o   s o l i t á r i o ! \ \ n    A p r e n d a   a   a r t e   s o f i s t i c a d a   d e   j o g a r   o s   c u r i n g a s   e   u s e - a   a   s e u   f a v o r ! \ \ n -   T e n t e   a c o m p a n h a r   a s   c a r t a s   m á g i c a s   t r a v e s s a s   e   a r r o m b a r   f e c h a d u r a s   e n c a n t a d a s ! \ \ n    D e s c u b r a   t e s o u r o s   d o u r a d o s   e s c o n d i d o s   e   c o l e t e   r u b i s   i n e s t i m á v e i s   e m   s u a   j o r n a d a ! \ \ n \ \ n O U T R A S   C A R A C T E R Í S T I C A S   T A M B É M   I N C L U E M : \ \ n Ï%  T a b e l a   d e   c l a s s i f i c a ç ã o   g l o b a l   -   c o m p i t a   c o m   j o g a d o r e s   d e   t o d o   o   m u n d o ; \ \ n Ï%  D i v e r s ã o   c o n s t a n t e   -   m i s s õ e s   d i á r i a s ,   e v e n t o s ,   a t i v i d a d e s ,   d e s a f i o s   e   r e c o m p e n s a s ; \ \ n Ï%  J o g u e   e m   q u a l q u e t.prototype.tagName="";
/**
 * function addEventListener(Stirng type, Function listener, Boolean useCapture) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @param {Boolean} useCapture
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.addEventListener=function(type, listener, useCapture){}; 
/**
 * function attachEvent(String type, Function listener) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.attachEvent=function(type, listener){}; 
/**
 * function detachEvent(String type, Function listener) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.detachEvent=function(type, listener){}; 
/**
 * function dispatchEvent(Object event) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {Object} event
 * @returns {Boolean}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.dispatchEvent=function(event){return false;}; 
/**
 * function getAttribute(name) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @returns {String}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getAttribute=function(name){return "";}; 
/**
 * function setAttribute(name, value) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @param {String} value
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.setAttribute=function(name, value){}; 
/**
 * function removeAttribute(name)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.removeAttribute=function(name){}; 
/**
 * function getAttributeNode(name)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @returns {Attr}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getAttributeNode=function(name){return new Attr();}; 
/**
 * function setAttributeNode(newAttr)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {Attr} newAttr
 * @returns {Attr}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.setAttributeNode=function(newAttr){return new Attr();}; 
/**
 * function removeAttributeNode(oldAttr) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {Attr} oldAttr
 * @returns {Attr}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */ 
Element.prototype.removeAttributeNode=function(oldAttr){return new Attr();}; 
/**
 * function getElementsByTagName(name)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @returns {NodeList}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getElementsByTagName=function(name){return new NodeList();}; 
/**
 * function getAttributeNS(namespaceURI, localName) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {String}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getAttributeNS=function(namespaceURI, localName){return "";}; 
/**
 * function setAttributeNS(namespaceURI, qualifiedName, value)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} qualifiedName
 * @param {String} value
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.setAttributeNS=function(namespaceURI, qualifiedName, value){}; 
/**
 * function removeAttributeNS(namespaceURI, localName)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} localName
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */ 
Element.prototype.removeAttributeNS=function(namespaceURI, localName){}; 
/**
 * function getAttributeNodeNS(namespaceURI, localName)   
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {Attr}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getAttributeNodeNS=function(namespaceURI, localName){return new Attr();}; 
/**
 * function setAttributeNodeNS(newAttr)    
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {Attr} newAttr
 * @returns {Attr}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.setAttributeNodeNS=function(newAttr){return new Attr();}; 
/**
 * function getElementsByTagNameNS(namespaceURI, localName)   
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {NodeList}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.getElementsByTagNameNS=function(namespaceURI, localName){return new NodeList();}; 
/**
 * function hasAttribute(name)   
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} name
 * @returns {Boolean}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */ 
Element.prototype.hasAttribute=function(name){return false;}; 
/**
 * function hasAttributeNS(namespaceURI, localName)    
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 *  
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {Boolean}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Element.prototype.hasAttributeNS=function(namespaceURI, localName){return false;}; 

/**
 * Object Text()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments CharacterData
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see CharacterData
 */
function Text(){};
Text.prototype = new CharacterData();
/**
 * function splitText(offset)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {Number} offset
 * @returns {Text}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Text
 */
Text.prototype.splitText = function(offset) {return new Text();};

/**
 * Object Comment()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments CharacterData
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see CharacterData
 */
function Comment(){};
Comment.prototype = new CharacterData();

/**
 * Object CDATASection()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Text
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Text
 */
function CDATASection(){};
CDATASection.prototype = new Text();

/**
 * Object DocumentType()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node
 */
function DocumentType(){};
DocumentType.prototype = new Node();
/**
 * Property name
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.name=""; 
/**
 * Property entities
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type NamedNodeMap 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.entities = new NamedNodeMap();
/**
 * Property notations 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type NamedNodeMap 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.notations=new NamedNodeMap(); 
/**
 * Property publicId 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.publicId=""; 
/**
 * Property systemId  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.systemId=""; 
/**
 * Property internalSubset 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @type String 
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
DocumentType.prototype.internalSubset="";

/**
 * Object Notation()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node
 */
function Notation(){};
Notation.prototype=new Node(); 
/**
 * Property publicId 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */  
Notation.prototype.publicId=""; 
/**
 * Property systemId 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */ 
Notation.prototype.systemId="";

/**
 * Object Entity()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node
 */ 
function Entity(){}; 
Entity.prototype=new Node();
/**
 * Property publicId 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */  
Entity.prototype.publicId="";
/**
 * Property systemId 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */  
Entity.prototype.systemId=""; 
/**
 * Property notationName 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */  
Entity.prototype.notationName=""; 

/**
 * Object EntityReference()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node
 */ 
function EntityReference(){};
EntityReference.prototype=new Node();

/**
 * Object ProcessingInstruction()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @augments Node
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Core Definition.
 * @see Node
 */ 
function ProcessingInstruction(){}; 
ProcessingInstruction.prototype=new Node();
/**
 * Property target  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */ 
ProcessingInstruction.prototype.target="";
/**
 * Property target  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @type String
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.     
 */ 
ProcessingInstruction.prototype.data=""; 


/*HTML DOM Below this line*/

/**
 * Object HTMLCollection()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments Object
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */ 
function HTMLCollection(){};
HTMLCollection.prototype = new Object();
/**
 * Property length
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLCollection.prototype.length=0;
/**
 * function item(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @returns {Node}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLCollection.prototype.item = function(index){return new Node();};
/**
 * function namedItem(name)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {String} name
 * @returns {Node}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLCollection.prototype.namedItem = function(index){return new Node();};

/**
 * Object HTMLOptionsCollection()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments Object
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */ 
function HTMLOptionsCollection(){};
HTMLOptionsCollection.prototype = new Object();
/**
 * Property length
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionsCollection.prototype.length=0;
/**
 * function item(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @returns {Node}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionsCollection.prototype.item = function(index){return new Node();};
/**
 * function namedItem(name)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {String} name
 * @returns {Node}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionsCollection.prototype.namedItem = function(index){return new Node();};

/**
 * Object HTMLDocument()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments Document
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see Document
 */ 
function HTMLDocument(){};
HTMLDocument.prototype = new Document();
/**
 * Property title
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.title="";
/**
 * Property referrer
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.referrer="";
/**
 * Property domain
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.domain="";
/**
 * Property URL
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.URL="";
/**
 * Property body
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.body=new HTMLElement();
/**
 * Property images
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.images=new HTMLCollection();
/**
 * Property applets
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.applets=new HTMLCollection();
/**
 * Property links
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.links=new HTMLCollection();
/**
 * Property forms
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.forms=new HTMLCollection();
/**
 * Property anchors
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.anchors=new HTMLCollection();
/**
 * Property cookie
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.cookie="";
/**
 * Property lastModified
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.lastModified="";
/**
 * function open()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.open = function(){};
/**
 * function close()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.close = function(){};
/**
 * function write(text)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {String} text
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.write = function(text){};
/**
 * function writeln(text)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {String} text
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.writeln = function(text){};
/**
 * function getElementsByName(elementName)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {String} elementName
 * @returns {NodeList}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDocument.prototype.getElementsByName = function(elementName){return new NodeList();};

/**
 * Object HTMLElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments Element
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see Element
 */ 
function HTMLElement(){};
HTMLElement.prototype = new Element();
/**
 * Property id
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLElement.prototype.id="";
/**
 * Property title
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLElement.prototype.title="";
/**
 * Property lang
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLElement.prototype.lang="";
/**
 * Property dir
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLElement.prototype.dir="";
/**
 * Property className
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLElement.prototype.className="";
/**
 * Property innerHTML
 * 
 * @type String
 */
HTMLElement.prototype.innerHTML="";
/**
 * Property offsetHeight
 * 
 * @type Number
 */
HTMLElement.prototype.offsetHeight=0;
/**
 * Property offsetWidth
 * 
 * @type Number
 */
HTMLElement.prototype.offsetWidth=0;
/**
 * Property offsetLeft
 * 
 * @type Number
 */
HTMLElement.prototype.offsetLeft=0;
/**
 * Property offsetTop
 * 
 * @type Number
 */
HTMLElement.prototype.offsetTop=0;
/**
 * Property offsetParent
 * 
 * @type HTMLElement
 */
HTMLElement.prototype.offsetParent = new HTMLElement();
/**
 * Property scrollHeight
 * 
 * @type Number
 */
HTMLElement.prototype.scrollHeight=0;
/**
 * Property scrollWidth
 * 
 * @type Number
 */
HTMLElement.prototype.scrollWidth=0;
/**
 * Property scrollLeft
 * 
 * @type Number
 */
HTMLElement.prototype.scrollLeft=0;
/**
 * Property scrollTop
 * 
 * @type Number
 */
HTMLElement.prototype.scrollTop=0;
/**
 * Property style
 * 
 * @type CSS2Properties
 */
HTMLElement.prototype.style = new CSS2Properties();

/**
 * Object HTMLHtmlElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLHtmlElement(){};
HTMLHtmlElement.prototype = new HTMLElement();
/**
 * Property version
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHtmlElement.prototype.version="";

/**
 * Object HTMLHeadElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLHeadElement(){};
HTMLHeadElement.prototype = new HTMLElement();
/**
 * Property profile
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHeadElement.prototype.profile="";

/**
 * Object HTMLLinkElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLLinkElement(){};
HTMLLinkElement.prototype = new HTMLElement();
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.disabled=false;
/**
 * Property charset
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.charset="";
/**
 * Property href
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.href="";
/**
 * Property hreflang
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.hreflang="";
/**
 * Property media
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.media="";
/**
 * Property rel
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.rel="";
/**
 * Property rev
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.rev="";
/**
 * Property target
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.target="";
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLinkElement.prototype.type="";

/**
 * Object HTMLTitleElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTitleElement(){};
HTMLTitleElement.prototype = new HTMLElement();
/**
 * Property text
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTitleElement.prototype.text="";

/**
 * Object HTMLMetaElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLMetaElement(){};
HTMLMetaElement.prototype = new HTMLElement();
/**
 * Property content
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMetaElement.prototype.content="";
/**
 * Property httpEquiv
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMetaElement.prototype.httpEquiv="";
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMetaElement.prototype.name="";
/**
 * Property scheme
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMetaElement.prototype.scheme="";

/**
 * Object HTMLBaseElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLBaseElement(){};
HTMLBaseElement.prototype = new HTMLElement();
/**
 * Property href
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBaseElement.prototype.href="";
/**
 * Property target
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBaseElement.prototype.target="";

/**
 * Object HTMLIsIndexElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLIsIndexElement(){};
HTMLIsIndexElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIsIndexElement.prototype.form=new HTMLFormElement();
/**
 * Property prompt
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIsIndexElement.prototype.prompt="";

/**
 * Object HTMLStyleElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLStyleElement(){};
HTMLStyleElement.prototype = new HTMLElement();
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLStyleElement.prototype.disabled=false;
/**
 * Property media
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLStyleElement.prototype.media="";
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLStyleElement.prototype.type="";

/**
 * Object HTMLBodyElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLBodyElement(){};
HTMLBodyElement.prototype = new HTMLElement();
/**
 * Property aLink
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.aLink="";
/**
 * Property background
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.background="";
/**
 * Property bgColor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.bgColor="";
/**
 * Property link
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.link="";
/**
 * Property text
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.text="";
/**
 * Property vLink
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBodyElement.prototype.vLink="";

/**
 * Object HTMLFormElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLFormElement(){};
HTMLFormElement.prototype = new HTMLElement();
/**
 * Property elements
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.elements=new HTMLCollection();
/**
 * Property length
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.length=0;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.name="";
/**
 * Property acceptCharset
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.acceptCharset="";
/**
 * Property action
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.action="";
/**
 * Property enctype
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.enctype="";
/**
 * Property method
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.method="";
/**
 * Property target
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.target="";
/**
 * function submit()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.submit = function(){};
/**
 * function reset()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFormElement.prototype.reset = function(){};

/**
 * Object HTMLSelectElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLSelectElement(){};
HTMLSelectElement.prototype = new HTMLElement();
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.type="";
/**
 * Property selectedIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.selectedIndex=0;
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.value="";
/**
 * Property length
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.length=0;
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.form = new HTMLFormElement();
/**
 * Property options
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLOptionsCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.options= new HTMLOptionsCollection();
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.disabled=false;
/**
 * Property multiple
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.multiple=false;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.name="";
/**
 * Property size
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.size=0;
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.tabIndex=0;
/**
 * function add(element, before)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {HTMLElement} element
 * @param {HTMLElement} before
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.add = function(element, before){};
/**
 * function remove(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.remove = function(index){};
/**
 * function blur()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.blur = function(){};
/**
 * function focus()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLSelectElement.prototype.focus = function(){};

/**
 * Object HTMLOptGroupElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLOptGroupElement(){};
HTMLOptGroupElement.prototype = new HTMLElement();
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptGroupElement.prototype.disabled=false;
/**
 * Property label
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptGroupElement.prototype.label="";

/**
 * Object Option()
 * @constructor
 * @param {String} text
 * @param {String} value
 * @param {Boolean} defaultSelected
 * @param {Boolean} selected
 */
function Option(text, value, defaultSelected, selected){};
Option.prototype = new HTMLOptionElement();
/**
 * Object HTMLOptionElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLOptionElement(){};
HTMLOptionElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.form = new HTMLFormElement();
/**
 * Property defaultSelected
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.defaultSelected=false;
/**
 * Property text
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.text="";
/**
 * Property index
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.index=0;
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.disabled=false;
/**
 * Property label
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.label="";
/**
 * Property selected
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.selected=false;
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOptionElement.prototype.value="";

/**
 * Object HTMLInputElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLInputElement(){};
HTMLInputElement.prototype = new HTMLElement();
/**
 * Property defaultValue
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.defaultValue="";
/**
 * Property defaultChecked
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.defaultChecked=false;
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.form = new HTMLFormElement();
/**
 * Property accept
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.accept="";
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.accessKey="";
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.align="";
/**
 * Property alt
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.alt="";
/**
 * Property checked
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.checked=false;
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.disabled=false;
/**
 * Property masLength
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.maxLenght=0;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.name="";
/**
 * Property readOnly
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.readOnly=false;
/**
 * Property size
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.size=0;
/**
 * Property src
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.src="";
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.tabIndex=0;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.type="";
/**
 * Property useMap
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.useMap="";
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.value="";
/**
 * function blur()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.blur = function(){};
/**
 * function focus()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.focus = function(){};
/**
 * function select()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.select = function(){};
/**
 * function click()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLInputElement.prototype.click = function(){};

/**
 * Object HTMLTextAreaElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTextAreaElement(){};
HTMLTextAreaElement.prototype = new HTMLElement();
/**
 * Property defaultValue
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.defaultValue="";
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.form= new HTMLFormElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.accessKey="";
/**
 * Property cols
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.cols=0;
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.disabled=false;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.name="";
/**
 * Property readOnly
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.readOnly=false;
/**
 * Property rows
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.rows=0;
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.tabIndex=0;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.type="";
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.value="";
/**
 * function blur()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.blur = function(){};
/**
 * function focus()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.focus = function(){};
/**
 * function select()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTextAreaElement.prototype.select = function(){};

/**
 * Object HTMLButtonElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLButtonElement(){};
HTMLButtonElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.form = new HTMLFormElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.accessKey = "";
/**
 * Property disabled
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.disabled=false;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.name="";
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.tabIndex=0;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.type="";
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLButtonElement.prototype.value="";

/**
 * Object HTMLLabelElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLLabelElement(){};
HTMLLabelElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLabelElement.prototype.form = new HTMLFormElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLabelElement.prototype.accessKey="";
/**
 * Property htmlFor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLabelElement.prototype.htmlFor="";

/**
 * Object HTMLFieldSetElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLFieldSetElement(){};
HTMLFieldSetElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFieldSetElement.prototype.form = new HTMLFormElement();

/**
 * Object HTMLLegendElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLLegendElement(){};
HTMLLegendElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLegendElement.prototype.form = new HTMLFormElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLegendElement.prototype.accessKey="";
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLegendElement.prototype.align="";

/**
 * Object HTMLUListElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLUListElement(){};
HTMLUListElement.prototype = new HTMLElement();
/**
 * Property compact
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLUListElement.prototype.compact=false;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLUListElement.prototype.type="";

/**
 * Object HTMLOListElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLOListElement(){};
HTMLOListElement.prototype = new HTMLElement();
/**
 * Property compact
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOListElement.prototype.compact=false;
/**
 * Property start
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOListElement.prototype.start=0;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLOListElement.prototype.type="";

/**
 * Object HTMLDListElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLDListElement(){};
HTMLDListElement.prototype = new HTMLElement();
/**
 * Property compact
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDListElement.prototype.compact=false;

/**
 * Object HTMLDirectoryElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLDirectoryElement(){};
HTMLDirectoryElement.prototype = new HTMLElement();
/**
 * Property compact
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDirectoryElement.prototype.compact=false;

/**
 * Object HTMLMenuElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLMenuElement(){};
HTMLMenuElement.prototype = new HTMLElement();
/**
 * Property compact
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMenuElement.prototype.compact=false;

/**
 * Object HTMLLIElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLLIElement(){};
HTMLLIElement.prototype = new HTMLElement();
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLIElement.prototype.type="";
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLLIElement.prototype.value=0;

/**
 * Object HTMLDivElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLDivElement(){};
HTMLDivElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLDivElement.prototype.align="";

/**
 * Object HTMLParagraphElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLParagraphElement(){};
HTMLParagraphElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLParagraphElement.prototype.align="";

/**
 * Object HTMLHeadingElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLHeadingElement(){};
HTMLHeadingElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHeadingElement.prototype.align="";

/**
 * Object HTMLQuoteElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLQuoteElement(){};
HTMLQuoteElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLQuoteElement.prototype.align="";

/**
 * Object HTMLPreElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLPreElement(){};
HTMLPreElement.prototype = new HTMLElement();
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLPreElement.prototype.width=0;

/**
 * Object HTMLBRElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLBRElement(){};
HTMLBRElement.prototype = new HTMLElement();
/**
 * Property clear
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBRElement.prototype.clear="";

/**
 * Object HTMLBaseFontElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLBaseFontElement(){};
HTMLBaseFontElement.prototype = new HTMLElement();
/**
 * Property color
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBaseFontElement.prototype.color="";
/**
 * Property face
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBaseFontElement.prototype.face="";
/**
 * Property size
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLBaseFontElement.prototype.size=0;

/**
 * Object HTMLBaseFontElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLFontElement(){};
HTMLFontElement.prototype = new HTMLElement();
/**
 * Property color
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFontElement.prototype.color="";
/**
 * Property face
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFontElement.prototype.face="";
/**
 * Property size
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFontElement.prototype.size=0;

/**
 * Object HTMLHRElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLHRElement(){};
HTMLHRElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHRElement.prototype.align="";
/**
 * Property noShade
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHRElement.prototype.noShade=false;
/**
 * Property size
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHRElement.prototype.size="";
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLHRElement.prototype.width="";

/**
 * Object HTMLModElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLModElement(){};
HTMLModElement.prototype = new HTMLElement();
/**
 * Property cite
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLModElement.prototype.cite="";
/**
 * Property dateTime
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLModElement.prototype.dateTime="";

/**
 * Object HTMLAnchorElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLAnchorElement(){};
HTMLAnchorElement.prototype = new HTMLElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.accessKey="";
/**
 * Property charset
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.charset="";
/**
 * Property coords
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.coords="";
/**
 * Property href
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.href="";
/**
 * Property hreflang
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.hreflang="";
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.name="";
/**
 * Property rel
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.rel="";
/**
 * Property rev
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.rev="";
/**
 * Property shape
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.shape="";
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.tabIndex=0;
/**
 * Property target
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.target="";
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.type="";
/**
 * function blur()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.blur = function(){};
/**
 * function focus()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAnchorElement.prototype.focus = function(){};

/**
 * Object Image()
 * @constructor
 * @param {Number} width
 * @param {Number} height
 */
function Image(width, height){};
Image.prototype = new HTMLImageElement();
/**
 * Object HTMLImageElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLImageElement(){};
HTMLImageElement.prototype = new HTMLElement();
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.name="";
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.align="";
/**
 * Property alt
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.alt="";
/**
 * Property border
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.border="";
/**
 * Property height
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.height=0;
/**
 * Property hspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.hspace=0;
/**
 * Property isMap
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.isMap=false;
/**
 * Property longDesc
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.longDesc="";
/**
 * Property src
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.src="";
/**
 * Property useMap
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.useMap="";
/**
 * Property vspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.vspace=0;
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLImageElement.prototype.width=0;

/**
 * Object HTMLObjectElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLObjectElement(){};
HTMLObjectElement.prototype = new HTMLElement();
/**
 * Property form
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLFormElement
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.form = new HTMLFormElement();
/**
 * Property code
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.code="";
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.align="";
/**
 * Property archive
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.archive="";
/**
 * Property border
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.border="";
/**
 * Property codeBase
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.codeBase="";
/**
 * Property codeType
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.codeType="";
/**
 * Property data
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.data="";
/**
 * Property declare
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.declare=false;
/**
 * Property height
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.height="";
/**
 * Property hspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.hspace=0;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.name="";
/**
 * Property standby
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.standby="";
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.tabIndex=0;
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.type="";
/**
 * Property useMap
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.useMap="";
/**
 * Property vspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.vspace=0;
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.width="";
/**
 * Property contentDocument
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Document
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLObjectElement.prototype.contentDocument= new HTMLDocument();

/**
 * Object HTMLParamElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLParamElement(){};
HTMLParamElement.prototype = new HTMLElement();
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLParamElement.prototype.name="";
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLParamElement.prototype.type="";
/**
 * Property value
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLParamElement.prototype.value="";
/**
 * Property valueType
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLParamElement.prototype.valueType="";

/**
 * Object HTMLAppletElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLAppletElement(){};
HTMLAppletElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.align="";
/**
 * Property alt
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.alt="";
/**
 * Property archive
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.archive="";
/**
 * Property code
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.code="";
/**
 * Property codeBase
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.codeBase="";
/**
 * Property height
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.hight="";
/**
 * Property hspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.hspace=0;
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.name="";
/**
 * Property object
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.object="";
/**
 * Property vspace
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.vspace=0;
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAppletElement.prototype.width="";

/**
 * Object HTMLMapElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLMapElement(){};
HTMLMapElement.prototype = new HTMLElement();
/**
 * Property areas
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMapElement.prototype.areas = new HTMLCollection();
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLMapElement.prototype.name="";

/**
 * Object HTMLAreaElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLAreaElement(){};
HTMLAreaElement.prototype = new HTMLElement();
/**
 * Property accessKey
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.accessKey="";
/**
 * Property alt
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.alt="";
/**
 * Property coords
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.coords="";
/**
 * Property href
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.href="";
/**
 * Property noHref
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.noHref=false;
/**
 * Property shape
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.shape="";
/**
 * Property tabIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.tabIndex=0;
/**
 * Property target
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLAreaElement.prototype.target="";

/**
 * Object HTMLScriptElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLScriptElement(){};
HTMLScriptElement.prototype = new HTMLElement();
/**
 * Property text
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.text="";
/**
 * Property htmlFor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.htmlFor="";
/**
 * Property event
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.event="";
/**
 * Property charset
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.charset="";
/**
 * Property defer
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.defer="";
/**
 * Property src
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.src="";
/**
 * Property type
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLScriptElement.prototype.type="";

/**
 * Object HTMLTableElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableElement(){};
HTMLTableElement.prototype = new HTMLElement();
/**
 * Property caption
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLTableCaptionElement
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.caption = new HTMLTableCaptionElement();
/**
 * Property tHead
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLTableSectionElement
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.tHead = new HTMLTableSelectionElement();
/**
 * Property tFoot
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLTableSectionElement
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.tFoot = new HTMLTableSelectionElement();
/**
 * Property rows
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.rows = new HTMLCollection();
/**
 * Property tBodies
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.tBodies = new HTMLCollection();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.align="";
/**
 * Property bgColor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.bgColor="";
/**
 * Property border
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.border="";
/**
 * Property cellPadding
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.cellPadding="";
/**
 * Property cellSpacing
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.cellSpacing="";
/**
 * Property frame
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.frame="";
/**
 * Property rules
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.rules="";
/**
 * Property summary
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.summary="";
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.width="";
/**
 * function createTHead();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @returns {HTMLElement}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.createTHead = function(){return new HTMLElement();};
/**
 * function deleteTHead();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.deleteTHead = function(){};
/**
 * function createTFoot();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @returns {HTMLElement}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.createTFoot = function(){return new HTMLElement();};
/**
 * function deleteTFoot();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.deleteTFoot = function(){};
/**
 * function createCaption();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @returns {HTMLElement}
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.createCaption = function(){return new HTMLElement();};
/**
 * function deleteCaption();
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.deleteCaption = function(){};
/**
 * function insertRow(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @returns {HTMLElement}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.insertRow = function(index){return new HTMLElement();};
/**
 * function deleteRow(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableElement.prototype.deleteRow = function(index){};

/**
 * Object HTMLTableCaptionElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableCaptionElement(){};
HTMLTableCaptionElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCaptionElement.prototype.align="";

/**
 * Object HTMLTableColElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableColElement(){};
HTMLTableColElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.align="";
/**
 * Property ch
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.ch="";
/**
 * Property chOff
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.chOff="";
/**
 * Property span
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.span=0;
/**
 * Property vAlign
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.vAlign="";
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableColElement.prototype.width="";

/**
 * Object HTMLTableSelectionElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableSelectionElement(){};
HTMLTableSelectionElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.align="";
/**
 * Property ch
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.ch="";
/**
 * Property chOff
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.chOff="";
/**
 * Property vAlign
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.vAlign="";
/**
 * Property rows
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.rows="";
/**
 * function insertRow(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @returns {HTMLElement}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.insertRow = function(index){return new HTMLElement();};
/**
 * function deleteRow(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableSelectionElement.prototype.deleteRow = function(index){};

/**
 * Object HTMLTableRowElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableRowElement(){};
HTMLTableRowElement.prototype = new HTMLElement();
/**
 * Property rowIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.rowIndex=0;
/**
 * Property sectionRowIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.sectionRowIndex=0;
/**
 * Property cells
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type HTMLCollection
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.cells = new HTMLCollection();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.align="";
/**
 * Property bgColor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.bgColor="";
/**
 * Property ch
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.ch="";
/**
 * Property chOff
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.chOff="";
/**
 * Property vAlign
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.vAlign="";
/**
 * function insertCell(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @returns {HTMLElement}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.insertCell = function(index){return new HTMLElement();};
/**
 * function insertCell(index)
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @param {Number} index
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableRowElement.prototype.deleteCell = function(index){};

/**
 * Object HTMLTableRowElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLTableCellElement(){};
HTMLTableCellElement.prototype = new HTMLElement();
/**
 * Property cellIndex
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.cellIndex=0;
/**
 * Property abbr
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.abbr="";
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.align="";
/**
 * Property axis
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.axis="";
/**
 * Property bgColor
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.bgColor="";
/**
 * Property ch
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.ch="";
/**
 * Property chOff
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.chOff="";
/**
 * Property colSpan
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.colSpan=0;
/**
 * Property headers
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.headers="";
/**
 * Property height
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.height="";
/**
 * Property noWrap
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.noWrap=false;
/**
 * Property rowSpan
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Number
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.rowSpan=0;
/**
 * Property scope
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.scope="";
/**
 * Property vAlign
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.vAlign="";
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLTableCellElement.prototype.width="";

/**
 * Object HTMLFrameSetElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLFrameSetElement(){};
HTMLFrameSetElement.prototype = new HTMLElement();
/**
 * Property cols
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameSetElement.prototype.cols="";
/**
 * Property rows
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameSetElement.prototype.rows="";

/**
 * Object HTMLFrameElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLFrameElement(){};
HTMLFrameElement.prototype = new HTMLElement();
/**
 * Property frameBorder
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.frameBorder="";
/**
 * Property longDesc
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.longDesc="";
/**
 * Property marginHeight
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.marginHeight="";
/**
 * Property marginWidth
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.marginWidth="";
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.name="";
/**
 * Property noResize
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Boolean
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.noResize=false;
/**
 * Property scrolling
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.scrolling="";
/**
 * Property src
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.src="";
/**
 * Property contentDocument
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Document
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLFrameElement.prototype.contentDocument= new HTMLDocument();

/**
 * Object HTMLIFrameElement()
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @augments HTMLElement
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 * @see HTMLElement
 */
function HTMLIFrameElement(){};
HTMLIFrameElement.prototype = new HTMLElement();
/**
 * Property align
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.align="";
/**
 * Property frameBorder
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.frameBorder="";
/**
 * Property height
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.height="";
/**
 * Property longDesc
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.longDesc="";
/**
 * Property marginHeight
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.marginHeight="";
/**
 * Property marginWidth
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.marginWidth="";
/**
 * Property name
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.name="";
/**
 * Property scrolling
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.scrolling="";
/**
 * Property src
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.src="";
/**
 * Property width
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type String
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.width="";
/**
 * Property contentDocument
 * http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
 * 
 * @type Document
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model HTML Specification.
 */
HTMLIFrameElement.prototype.contentDocument= new HTMLDocument();

/* Stylesheets */
/**
 * Object CSS2Properties()
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/ecma-script-binding.html
 * 
 * @augments Object
 * @constructor
 * @since Standard ECMA-262 3rd. Edition
 * @since Level 2 Document Object Model Style Specification.
 */
function CSS2Properties(){};
CSS2Properties.prototype = new Object();
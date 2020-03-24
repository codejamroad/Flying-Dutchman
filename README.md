# Flying-Dutchman

The Flying Dutchman is a franchising group with a small local pub here in Downsala with an increasing number of recurring visitors. Since the pub has a tradition of providing a "family" feeling among its customers, the long queues at the bar desk have become slightly annoying if not to the customers, so at least to bar owners and staff.

It is also time to start modernizing the bar somewhat, still without changing the traditional air of the pub. One part is to support the bartender with a new ordering system, and the other is to use small touch screens distributed in the pub area, where the customers can select their beer of choice in their own pace. Also included are some ideas about providing certain special information about the beers, such as if they contain gluten or not. 

During the planning of the new system, the bar owners suddenly had the (maybe not completely legal, but still) idea of having a set of VIP customers, who have a certain credit at the bar, and who can be trusted to handle their own serving of the beers from the VIP cooler (which is close to the bar disk). The idea started with Uncle Jordan, who is a very close friend of the pub owner, who already goes behind the bar and picks up his beer with a wave to the bartender. 

So, the final idea behind the project is to build a system that will support the bartenders, allow the customers to choose the beer at the table, and for VIP customers to also be able to order and pay a beer through the system. 





Motivate why your project is well designed from a Human-Computer interaction perspective.

Our project is created from a user-centric design and we have constructed the website keeping in mind the Benyon 12 principles. 

We have ensured the key features like ordering food i.e. Menu list is clearly visible and has been emphasised to catch the attention of the user. 
While creating multiple pages we used similar layouts and structured to maintain the consistency of the project.
To make things easier for the user, the website has many icons like Cart which makes things easier to recognise.
Different styles have been used on the website to interest the user.

Describe how you have taken human factors (such as memory, perception, etc. – cf. with the first three lectures) into account in your design of the Project.

The website has many visual which guides the user’s perception. Home page of our website is designed to make sure the user seeks that we have two primary tasks at hand. Firstly, reservation in the bar and ordering of drinks. This is achieved using a bigger size button and makes them focus the attention to the right spots. The web pages have been designed with many colours and animations like a sailing boat to attract perceptual attention of the user.

Describe some things that are not well designed in this respect, you should point these out, and give a hint as to what could be done to rectify this.

I believe we have to consider human cognition for our usability of CART. Cart mechanism only works on drag and drop functionality. There might be many users who won’t get that usability in one short because of there prior different experiences of using carts. A quick solution to the problem is that we have a message(text) in the cart “drag the menu to order”. The user might face some difficulty initially until they get used to it. 

Describe the general idea on how to implement a multilingual interface. Do not use code, but describe this in words. Also describe how you have implemented it (especially if you have taken a different approach).

The basic idea of multiple language support website is that on runtime your webpage should be able to display all the content in various languages. This can be implemented in various ways and there are frameworks which make this implementation easier. We have implemented a basic and simple solution which could be called Value pair solution (i.e. a dictionary). In this solution, once the input comes from the UI by user selection of language, we set current language as selected language and then all the content will be fetched from language dictionary with the key value of selected language. This will lead to the display of selected language content.

Describe how drag-and-drop works in the general sense. How is information transferred between source and target? Also describe how this is implemented in HTML and JavaScript in your project (no code samples).

Drag and drop functionality is to pass off information from source to target. This is implemented using some events. Basically, events carry information from source to target. In our website, we have implemented drag and drop functionality for putting drinks into Cart. We have the sender of information at HTML page i.e we define which div is draggable and receiver is at javascript file which implements standard functions which get triggered when the event is triggered. Target data display and functionality can be handled in the javascript file event methods.

Describe the general idea behind UNDO-REDO and how this can be used to implement unlimited UNDO. Also describe how you have realised the implementation in your project, and any delimitations you might have made.

Undo-Redo is a very useful tool to give flexibility in the working of the user. Generally, this means that upon undo state, the system should get the last registered state and similarly for a redo. The command pattern is easy for working on undo-redo. Holding states of the system becomes challenging. In our website, if the user as ordered then if he/she wants to change the order then we could bring back the user to the stage where he/she can still modify the order using the undo-redo mechanism. 

During the course you have been told to be careful not to make the interface design too detailed and cluttered, and for example, not to use too much graphics in the layout. Describe how to reason in order to get a graphic complexity that is not too low and not too high but just right (Swedish: “lagom”).

We have been able to achieve a good simple website. Yes, we have used graphics and animations to improve look and feel of our website which can make this look clustered and complex too. However, after many rounds of reviewing, rearranging things and by following basic design principles like visibility, consistency, flexibility etc. we are able to get a not too low and not too high design in our web pages.

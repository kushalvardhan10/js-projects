# from  tkinter import*
# def click_button():
#     print('button clicked')
# root=Tk()
# root.title('event-drive')
# root.geometry('300x300')
# button=Button(root,text='click me',bg='red',fg='white',command=click_button)
# button.pack()

# def toggle_button():
#    if button['state']==NORMAL:
#       button['state']=DISABLED
#       button.config(text='disabled')
#       print('enabled')
#    else:
#       button['state']=NORMAL
#       button.config(text='enabled')
#       print('diabled')

# root=Tk()
# root.title('handling button')
# button=Button(root,text='enabled',command=toggle_button)
# button.pack()
# def check_button():
#     print(f'option1:{var1.get()},option 2:{var2.get()}')
# root=Tk()
# root.title('check button')
# var1=IntVar(value=0)
# var2=IntVar(value=0)
# Checkbutton1=Checkbutton(root,text="option 1",variable=var1,onvalue=1,offvalue=0,command=check_button)
# checkbutton2=Checkbutton(root,text='option2',variable=var2,onvalue=1,offvalue=0,command=check_button)
# Checkbutton1.pack()
# checkbutton2.pack()
# def on_radio():
#     print(f'selected option:{var.get()}')
# root=Tk()
# root.title('radio button')
# var=IntVar(value=0)
# Radiobutton1=Radiobutton(root,text='option1',variable=var,value=1,command=on_radio)
# Radiobutton2=Radiobutton(root,text='option2',variable=var,value=2,command=on_radio)
# Radiobutton3=Radiobutton(root,text='option3',variable=var,value=3,command=on_radio)
# Radiobutton1.pack()
# Radiobutton2.pack()
# Radiobutton3.pack()

# def hello():
#     print('hello world!')
# def goodbye():
#     print('goodbyee')       
# root=Tk()
# root.title('menu bar')
# menu_bar=Menu(root)
# file_menu=Menu(menu_bar,tearoff=0)
# file_menu.add_command(label='hello',command=hello)
# file_menu.add_command(label='goodbye',command=goodbye)
# file_menu.add_separator()
# file_menu.add_command(label='exist',command=root.quit)
# menu_bar.add_cascade(label='file',menu=file_menu)
# root.config(menu=menu_bar)
# def toggle():
#     print(f'otion checked:{var.get()}') 
# root=Tk()
# root.title('menubutton')
# menubutton=Menubutton(root,text='otions')
# menubutton.menu=Menu(menubutton,tearoff=0)
# menubutton['menu']=menubutton.menu
# var=IntVar(value=0)
# menubutton.menu.add_checkbutton(label='check me',variable=var,command=toggle)
# menubutton.pack()
# root.mainloop()

# def on_select(event):
#     selected_item=listbox.get(listbox.curselection)
#     print(f"selected item:{selected_item}")

# root=Tk()
# root.title('list scrollbar box')
# listbox=Listbox(root)
# for item in ['item1','item2','item3','item4']:
#     listbox.insert(END,item)
# listbox.bind('<<listboxselect>>',on_select)    

# listbox.pack()
# root.mainloop()

# root=Tk()
# root.title('scrollbar')
# listbox=Listbox(root)
# scrollbar=Scrollbar(root,orient=VERTICAL,command=listbox.yview)
# listbox.config(yscrollcommand=scrollbar.set)
# for i in range(100):
#     listbox.insert(END,f'item{i+1}')
# listbox.pack(side=LEFT,fill=BOTH,expand=True) 
# scrollbar.pack(side=RIGHT,fill=Y)
# root.mainloop()   
# import tkinter as tk

# # Event handler function
# def on_click():
#     label.config(text="Button was clicked!")

# # Create main window
# root = tk.Tk()
# root.title("Event-Driven Example")

# # Create a label
# label = tk.Label(root, text="Click the button")
# label.pack(pady=10)

# # Create a button and bind it to the event
# button = tk.Button(root, text="Click Me", command=on_click)
# button.pack(pady=10)

# # Run the event loop
# root.mainloop()

from tkinter import*
root=Tk()
root.title('list box with title')
root.geometry('300x200')

scrollbar=Scrollbar(root,orient=VERTICAL)
listbox=Listbox(root,yscrollcommand=scrollbar.set,height=10,width=30)
scrollbar.config(command=listbox.yview)
listbox.pack(side=LEFT,fill=BOTH,expand=True)
scrollbar.pack(side=RIGHT,fill=Y)
for i in range(50):
    listbox.insert(END,f'item{i}')
root.mainloop()


from tkinter import*
from tkinter import messagebox
def new_file():
    messagebox.showinfo('new file','create a new file')
def open_file():
    messagebox.showinfo('open a file','open a existing file')
def exit():
    root.quit()       
root=Tk()
root.title('men bar widgets')
root.geometry('400x300')

menu_bar=Menu(root)
root.config(menu=menu_bar)

file_menu=Menu(menu_bar,tearoff=0)
menu_bar.add_cascade(label='file',menu=file_menu)
file_menu.add_command(label='new',command=new_file)
file_menu.add_command(label='open',command=open_file)
file_menu.add_separator()
file_menu.add_command(label='exist',command=exit)

edit_menu=Menu(menu_bar,tearoff=0)
menu_bar.add_cascade(label='edit',menu=edit_menu)
edit_menu.add_command(label='cut')
edit_menu.add_command(label='copy')
edit_menu.add_command(label='paste')
root.mainloop()


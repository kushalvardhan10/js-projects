from tkinter import*
def show_text():
    entered_text=entry.get()
    print(entered_text)
def click_me():
    print("button clicked")

root=Tk()
root.title('GUI')
root.geometry('400x300')
label=Label(root,text='hello, world!',font=('arial',17),bg='blue',fg='white')
label.pack(side='top',fill='y',padx=10,pady=10)
entry=Entry(root,fg='black',bg='white',width='20',font=('arial',12))
entry.pack(side='left',fill='none')
button=Button(root,text='show text',command=show_text)
button.pack()
button=Button(root,text="click me",font=('arial',16),bg='green',fg='white',activebackground='yellow',activeforeground='red',command=click_me)
button.pack(side='bottom',pady=10,padx=10,ipady=10,ipadx=10)
root.mainloop()
